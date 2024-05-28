import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { NotificationProps } from "../props/NotificationProps";
import NotificationSwitch from "./NotificationSwitch";

const Notification: React.FC<NotificationProps> = ({
  title,
  subtitle,
  btnFunction,
}) => {
  const screenWidth = Dimensions.get("window").width;

  const scale = screenWidth / 430;

  return (
    <View style={styles.notification_container}>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.subtitle, { fontSize: scale * 14 }]}>
          {subtitle}
        </Text>
      </View>
      <View>
        <NotificationSwitch initialValue={true} btnFunction={btnFunction} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notification_container: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10%",
  },
  text: {
    maxWidth: "65%",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#292D32",
  },
  subtitle: {
    fontSize: 14,
    color: "#292D32",
    lineHeight: 20,
    letterSpacing: 0.1,
  },
});

export default Notification;
