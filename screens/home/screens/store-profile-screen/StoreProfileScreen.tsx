import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Platform,
  Linking,
  Animated,
} from "react-native";
import React, { useEffect, useRef } from "react";
import {
  AntDesign,
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { storeProfileScreenStyles as styles } from "./styles";
import { useLocalSearchParams, useRouter } from "expo-router";
import * as Clipboard from "expo-clipboard";
import { BusinessRespDto } from "../../../../api/api-contracts/user/responses/business.response";
import { getItemFromCache } from "../../../../store/cache/cache";
import { STORES } from "../../../../store/cache/cacheKeys";
import {
  RegionListRespDto,
  RegionRespDto,
} from "../../../../api/api-contracts/user/responses/region.response";
import { getClosingTime } from "../../../../utils/time/timeUtils";
import { keepStringBeforeFirstComma } from "../../../../utils/string/stringUtils";

interface StoreProfileLinkProps {
  left_icon: any;
  right_icon: any;
  link_text: any;
  action: () => void;
}
const StoreProfileLink: React.FC<StoreProfileLinkProps> = ({
  left_icon,
  right_icon,
  link_text,
  action,
}) => {
  function linkAction() {
    action();
  }

  return (
    <TouchableOpacity onPress={linkAction} style={styles.link_container}>
      <View style={styles.link}>
        <View style={styles.link_left}>
          <View style={styles.icon}>{left_icon}</View>
          <Text style={styles.link_text}>{link_text}</Text>
        </View>
        {right_icon}
      </View>
      <View
        style={{
          width: "150%",
          backgroundColor: "rgba(196,196,196,0.21)",
          height: 0.5,
          marginLeft: -20,
        }}
      />
    </TouchableOpacity>
  );
};
const StoreProfileScreen = () => {
  const router = useRouter();
  const item = useLocalSearchParams();
  const [store, setStore] = React.useState<BusinessRespDto | null>(null);

  function closePage() {
    router.back();
  }

  const [timeLinkIsOpen, setTimeLinkIsOpen] = React.useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;

  const address = keepStringBeforeFirstComma(
    store?.address.street || "391 Driftwood Avenue"
  );
  const phoneNumber =
    formatPhoneNumber(store?.mobile.phoneNumber as string) || "647-123-4567";

  const copyToClipboard = () => {
    Clipboard.setStringAsync(address);
  };

  const callPhoneNumber = () => {
    const link = `tel:${phoneNumber}`;

    Linking.openURL(link)
      .then((res) => {})
      .catch((err) => {
        console.log("error", err);
      });
  };

  function toggleDropdown() {
    setTimeLinkIsOpen(!timeLinkIsOpen);
    Animated.timing(animatedHeight, {
      toValue: timeLinkIsOpen ? 0 : 70,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }

  function formatPhoneNumber(number: string): string {
    if (!number) return "";
    // Remove any non-numeric characters from the string
    const numericNumber = number.replace(/\D/g, "");

    // Check if the number has the expected length (10 digits)
    if (numericNumber.length !== 10) {
      throw new Error("Invalid phone number length");
    }

    // Format the number
    const countryCode = "+1";
    const areaCode = numericNumber.substring(0, 3);
    const firstPart = numericNumber.substring(3, 6);
    const secondPart = numericNumber.substring(6);

    return `${countryCode} (${areaCode})-${firstPart}-${secondPart}`;
  }

  useEffect(() => {
    async function fetchStoreData() {
      const stores = (await getItemFromCache(STORES)) as BusinessRespDto[];
      const store = stores.find((store) => store.id === Number(item.storeId));

      if (store) {
        setStore(store);
      }
    }
    fetchStoreData();
  }, []);

  const takeMeThere = () => {
    const googleMapsURL = `https://www.google.com/maps?q=${store?.address.longitude},${store?.address.latitude}`;

    Linking.openURL(googleMapsURL).catch((error) => {
      console.error(`Failed to open Google Maps: ${error}`);
    });
  };
  function mapRegionsToText(
    regionList: RegionRespDto[] | undefined
  ): JSX.Element {
    const regionsText = regionList?.map((region) => region.name).join(" • ");
    return <Text>{regionsText}</Text>;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../../assets/images/la-boqueria-food-market-2107061_1920.png")}
        style={styles.image_background}
      >
        <TouchableOpacity style={styles.close_button} onPress={closePage}>
          <Ionicons name="ios-close" size={20} color="black" />
        </TouchableOpacity>
        <View style={styles.store_image}>
          <Image
            source={require("../../../../assets/images/no-store.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      </ImageBackground>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.title}>{store?.name}</Text>
        {/* <Text style={styles.subtitle}>West African • Nigerian • Grocery</Text> */}
        <Text style={styles.subtitle}>
          {mapRegionsToText(store?.regions.regionList)}
        </Text>
        <TouchableOpacity style={styles.button} onPress={takeMeThere}>
          <Text style={{ color: "#fff", fontSize: 12 }}>Visit Store</Text>
        </TouchableOpacity>
        <View>
          <StoreProfileLink
            left_icon={<AntDesign name="Safety" size={22} color="#252C2C" />}
            right_icon={<FontAwesome5 name="copy" size={18} color="#252C2C" />}
            link_text={address}
            action={copyToClipboard}
          />
          <StoreProfileLink
            left_icon={
              <AntDesign name="clockcircleo" size={20} color="#252C2C" />
            }
            right_icon={
              <FontAwesome name="angle-down" size={20} color="#252C2C" />
            }
            link_text={
              <Text style={{ color: "#929292" }}>
                <Text style={{ color: "#007300" }}>Open </Text>now till{" "}
                {getClosingTime(store?.schedule)}
              </Text>
            }
            action={toggleDropdown}
          />

          {timeLinkIsOpen && (
            <Animated.View
              style={{
                height: animatedHeight,
                overflow: "hidden",
                paddingLeft: 60,
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  marginBottom: 10,
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Text>Mon - Fri</Text>
                <Text>8:00am - 8:00pm</Text>
              </View>
              <View
                style={{
                  marginBottom: 10,
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Text>Sat - Sun</Text>
                <Text>8:00am - 8:00pm</Text>
              </View>

              <View
                style={{
                  width: "150%",
                  backgroundColor: "rgba(196,196,196,0.21)",
                  height: 0.5,
                  marginLeft: -20,
                }}
              />
            </Animated.View>
          )}
          <StoreProfileLink
            left_icon={
              <FontAwesome5 name="phone-alt" size={18} color="#252C2C" />
            }
            right_icon={
              <Feather name="arrow-up-right" size={18} color="#252C2C" />
            }
            link_text={phoneNumber}
            action={callPhoneNumber}
          />
        </View>
      </View>
    </View>
  );
};

export default StoreProfileScreen;
