import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { headerStyles as styles } from "../styles";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface HeaderProps {
  storeId: number;
  storeName: string;
}

const Header: React.FC<HeaderProps> = ({ storeId, storeName }) => {
  const router = useRouter();
  function closePage() {
    router.back();
  }

  function viewStore() {
    router.push("/home/storeprofile?storeId=" + storeId);
  }
  return (
    <View
      style={{
        width: "100%",
        height: 90,
        position: "relative",
        zIndex: 3,
        backgroundColor: "#fff",
        marginBottom: 40,
      }}
    >
      <View style={styles.feature_container}>
        <TouchableOpacity
          onPress={closePage}
          style={{ alignSelf: "flex-start", marginLeft: 20, marginTop: 20 }}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Image
          source={require("../../../../../assets/images/no-store.png")}
          style={styles.feature_image}
        />

        <Text style={styles.store_name}>{storeName}</Text>
        <TouchableOpacity onPress={viewStore}>
          <Text style={{ color: "#204B38", fontSize: 11 }}>View Store</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
