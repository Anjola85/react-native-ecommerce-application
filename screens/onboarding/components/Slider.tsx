import React, { useRef, useState, useEffect } from "react";
import {
  Text,
  View,
  Dimensions,
  FlatList,
  Animated,
  ViewToken,
} from "react-native";
import { useRouter, Link } from "expo-router";
import { data } from "../data/data";
import { theme } from "../../../constants/theme";
import { USER_HAS_ONBOARDED } from "../../../store/cache/cacheKeys";
import { addToCache } from "../../../store/cache/cache";
import styles from "../styles/OnboardingSliderStyles";
import SliderItem from "./SliderItem";
import Button from "../../../components/buttons/button/Button";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoIndex, setAutoIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const sliderRef = useRef<FlatList<any>>(null);
  const router = useRouter();

  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
      const firstItem = viewableItems[0]?.item;
      if (firstItem) {
        setCurrentIndex(firstItem.id - 1);
        setAutoIndex(firstItem.id - 1); // Synchronize auto index with user interaction
      }
    }
  ).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const screenWidth = Dimensions.get("window").width;

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (autoIndex + 1) % data.length;
      setAutoIndex(nextIndex); // Update autoIndex
      sliderRef.current?.scrollToIndex({
        animated: true,
        index: nextIndex,
      });
    }, 3000);

    return () => clearInterval(interval); // Clean up
  }, [autoIndex]);

  const continueToSignUp = async () => {
    console.log("start browsing clicked");
    router.push("/(auth)/signup");
    // router.push("/(tabs)/home");
  };

  function goToTerms() {
    router.push("/account/settings/terms");
  }

  function goToPrivacy() {
    router.push("/account/settings/privacy");
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View
            style={{
              width: screenWidth,
              alignSelf: "center",
              height: "50%",
            }}
          >
            <SliderItem item={item} />
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={sliderRef}
      />
      <View style={styles.dotContainer}>
        {data.map((_, i) => (
          <View
            key={i}
            style={{
              ...styles.dot,
              backgroundColor:
                i === autoIndex ? theme.colors.primary : theme.colors.grey,
            }}
          />
        ))}
      </View>
      <View style={styles.text}>
        {data.map((item, index) =>
          index === currentIndex ? (
            <Text key={index} style={styles.title}>
              {item.title}
            </Text>
          ) : null
        )}
      </View>
      <Button
        onPress={continueToSignUp}
        button_style={styles.continue_btn}
        text_style={styles.continue_btn_text}
      >
        <Text>Start browsing</Text>
      </Button>
      <View style={styles.tos_container}>
        <Text style={styles.tos}>
          By signing up you agree to Quickmart's{" "}
          <Link
            href="/account/settings/terms"
            // href="(auth)/email"
            replace
            asChild
            onPress={goToTerms}
          >
            <Text style={{ textDecorationLine: "underline" }}>Terms.</Text>
          </Link>{" "}
          See how we use your data in our{" "}
          <Link
            href="/account/settings/privacy"
            asChild
            replace
            onPress={goToPrivacy}
          >
            <Text style={{ textDecorationLine: "underline" }}>
              Privacy Policy.
            </Text>
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default Slider;
