import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/header/Header";
import { Link } from "expo-router";
import { ExternalLink } from "../../../components/external-link/ExternalLink";
import { TouchableOpacity } from "react-native-gesture-handler";
import { primaryColor } from "../../../constants/Colors";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { SvgComponent as InvitePeople } from "../../../assets/svgs/InvitePeopleSvg";

const InviteScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginBottom: 50 }}>
        <Header title="Invite Your Friends" hasSeperator={false} hasButton />
      </View>
      <View style={styles.content}>
        <View style={styles.heading}>
          <Text style={styles.heading_text}>
            Get a $20 credit when you invite a friend to join QuiikMart !
          </Text>
          <Image
            source={require("../../../assets/images/red-underline.png")}
            style={{
              position: "absolute",
              bottom: 0,
              left: "32%",
              transform: [{ translateX: -50 }],
            }}
          />
        </View>
        <InvitePeople style={{ alignSelf: "center", width: "100%" }} />

        <Text style={styles.description}>
          Get a friend to join Quickmart and get $20 in credits while your
          friend gets $5 in credits. Stack all the credits and use them once 2.0
          goes live.{" "}
          <ExternalLink
            href="https://quiikmart.com"
            style={{ color: "#699635" }}
          >
            Find out more about QuiikMart 2.0
          </ExternalLink>
        </Text>

        <TouchableOpacity style={styles.invite_button}>
          <Text style={{ color: "#fff", fontFamily: "PoppinsMedium" }}>
            Invite Friends
          </Text>
          <FontAwesome name="share" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  heading: {
    display: "flex",
    alignSelf: "center",
    position: "relative",
  },
  heading_text: {
    fontSize: 18,
    marginBottom: 20,
    fontFamily: "PoppinsMedium",
    textAlign: "center",
    maxWidth: "85%",
    color: "#000",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  description: {
    fontSize: 13,
    fontFamily: "PoppinsRegular",
    maxWidth: "90%",
    lineHeight: 25,
    color: "#000",
    alignSelf: "center",
    marginBottom: 20,
  },
  invite_button: {
    backgroundColor: primaryColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    maxWidth: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    flexDirection: "row",
  },
  icon: {
    color: "#fff",
    marginLeft: 10,
    fontSize: 18,
  },
});

export default InviteScreen;
