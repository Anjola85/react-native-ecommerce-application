import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ScheduleRequest } from "../../../api/api-contracts/user/requests/dto/schedule.request";
import { isStoreOpen, convertTo12Hour } from "../../../utils/time/timeUtils";
import { minimizeTextByCharacters } from "../../../utils/string/stringUtils";
import { calculateDistance } from "../../../utils/geolocation/distanceKm";
import { MapStoreCardProps } from "../props";
import { formatAddress } from "../functions";
import AfroMarket from "../../../assets/images/store-2.png";
import styles from "../styles/MapStoreCardStyles";
import { router } from "expo-router";

const DEFAULT_STORE_RATING = 4.5;

const MapStoreCard = ({ store, user, onPress }: MapStoreCardProps) => {
  const today = new Date()
    .toLocaleDateString(undefined, { weekday: "long" })
    .split(",")[0]
    .toLowerCase();

  // Random Image Component.
  // Used for now until the real images are gotten from the server.
  const RandomImageComponent = () => {
    const randomValue = Math.random();

    // const imageSource = randomValue < 0.5 ? FruitsMarket : AfroMarket;
    const imageSource = AfroMarket;

    return (
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={handelStorePress}>
          <Image source={imageSource} style={styles.store_img} />
        </TouchableOpacity>
        <StoreClosedOverlay />
      </View>
    );
  };

  const distanceFromUser = (): string => {
    const storePoint = {
      latitude: store.address.latitude,
      longitude: store.address.longitude,
    };
    const d = calculateDistance(user, storePoint);
    return d % 1 === 0 ? `${d}km` : `${d.toFixed(1)}km`;
  };

  const StoreClosedOverlay = () => {
    const daysOfWeek = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];

    const todayIndex = new Date().getDay();
    const tomorrowIndex = (todayIndex + 1) % 7;
    const tomorrow = daysOfWeek[tomorrowIndex];

    if (!store.schedule) return null;

    const openTime = convertTo12Hour(
      store.schedule[tomorrow as keyof ScheduleRequest]?.open.hour,
      store.schedule[tomorrow as keyof ScheduleRequest]?.open.minute
    );
    if (!isStoreOpen(store)) {
      return (
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>
            Available from {openTime} tomorrow
          </Text>
        </View>
      );
    }
    return null;
  };

  const openingHours = () => {
    const timeOpen = convertTo12Hour(
      store.schedule[today as keyof ScheduleRequest]?.open.hour,
      store.schedule[today as keyof ScheduleRequest]?.open.minute
    );
    const timeClose = convertTo12Hour(
      store.schedule[today as keyof ScheduleRequest]?.close.hour,
      store.schedule[today as keyof ScheduleRequest]?.close.minute
    );
    return `${timeOpen} - ${timeClose}`;
  };

  const handelStorePress = () => {
    onPress && onPress();
    router.push("/home/marketplace?storeId=" + store.id);
  };

  return (
    <TouchableOpacity
      style={[styles.store_card, { marginRight: 16 }]}
      onPress={handelStorePress}
    >
      <RandomImageComponent />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.store_name}>
          {minimizeTextByCharacters(store.name, 25)}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
            marginBottom: 8,
          }}
        >
          <Feather name="map-pin" size={12} color="#979797" />
          <Text style={styles.store_address}>
            {formatAddress(`${store.address?.street}`)}
          </Text>
        </View>
        <View style={styles.tags}>
          <View style={styles.tag}>
            <Feather name="star" size={12} color="#5E5E60" />
            <Text style={styles.tag_text}>
              {store.rating || DEFAULT_STORE_RATING}
            </Text>
          </View>
          <View style={styles.tag}>
            <Feather name="navigation" size={12} color="#5E5E60" />
            <Text style={styles.tag_text}>{distanceFromUser()}</Text>
          </View>
          {store.schedule && (
            <View style={styles.tag}>
              <Feather name="clock" size={12} color="#5E5E60" />
              <Text style={styles.tag_text}>{openingHours()}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MapStoreCard;
