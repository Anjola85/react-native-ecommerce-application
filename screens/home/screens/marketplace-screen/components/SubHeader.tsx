import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { subHeaderStyles as styles } from "../styles";
import { theme } from "../../../../../constants/theme";
import { FontAwesome } from "@expo/vector-icons";
import {
  isOpenOrClosed,
  getClosingTime,
} from "../../../../../utils/time/timeUtils";
import { BusinessRespDto } from "../../../../../api/api-contracts/user/responses/business.response";

interface SubHeaderProps {
  store: BusinessRespDto | null;
}

const SubHeader: React.FC<SubHeaderProps> = ({ store }) => {
  const isClosed = store && isOpenOrClosed(store.schedule) === "Closed";

  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <Text style={styles.time_status}>
          <Text style={{ color: isClosed ? "red" : "#006A16" }}>
            {store && isOpenOrClosed(store.schedule)}{" "}
          </Text>
          {!isClosed && <Text>•</Text> &&
            "Closes at " + getClosingTime(store?.schedule)}
        </Text>
        <View style={styles.btn_container}>
          <TouchableOpacity
            style={[
              styles.button,
              { alignItems: "center", backgroundColor: "blue" },
              styles.activeBtn,
            ]}
          >
            <Text style={[styles.buttonText, styles.activeBtnText]}>
              Pickup
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              { marginRight: 0, zIndex: 3, width: 110, paddingLeft: 40 },
            ]}
          >
            <Text style={[styles.buttonText, { fontSize: 9 }]}>Delivery </Text>
            <Text style={[styles.buttonText, { fontSize: 9 }]}>
              Unavailable
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.ratingsContainer}>
        <View style={styles.ratingBox}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              marginBottom: 5,
            }}
          >
            <FontAwesome name="star" size={13} color={theme.colors.gold} />
            <Text style={styles.ratingText}>{store?.rating}</Text>
          </View>
          <Text style={styles.seeReviewsText}>See reviews</Text>
        </View>
        <View
          style={{
            height: "100%",
            width: 2,
            backgroundColor: "rgba(196,196,196,0.21)",
          }}
        />
        <View style={styles.detailBox}>
          <Text style={styles.detailText}>15mins</Text>
          <Text style={styles.detailLabel}>Prep time</Text>
        </View>
        <View
          style={{
            height: "100%",
            width: 2,
            backgroundColor: "rgba(196,196,196,0.21)",
          }}
        />

        <View style={styles.detailBox}>
          <Text style={styles.detailText}>10-15mins</Text>
          <Text style={styles.detailLabel}>Distance</Text>
        </View>
      </View>
      <View style={styles.third}>
        <View style={styles.search_box}>
          <Text style={{ fontSize: 11 }}>Search...</Text>
        </View>
      </View>
      <View
        style={{
          width: "120%",
          height: 3,
          backgroundColor: "rgba(196, 196, 196, 0.21)",
          marginTop: 10,
          marginLeft: -20,
        }}
      ></View>
    </View>
  );
};

export default SubHeader;
