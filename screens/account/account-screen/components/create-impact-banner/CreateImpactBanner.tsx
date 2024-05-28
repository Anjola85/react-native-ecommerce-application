import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { SvgComponent as ImpactSvg } from "../../../../../assets/svgs/Impact";
import { useRouter } from "expo-router";
import { styles } from "./styles";

const CreateImpactBanner = () => {
  const router = useRouter();

  const screenWidth = Dimensions.get("window").width;

  const scale = screenWidth / 430;

  function goToInviteFriendsPage() {
    router.push("/account/invite");
  }
  return (
    <View style={styles.container}>
      <ImpactSvg width={129 * scale} height={129 * scale} />
      <View style={styles.right}>
        <Text style={[styles.title, { fontSize: 16 * scale }]}>
          Create an Impact with Us
        </Text>
        <TouchableOpacity style={styles.button} onPress={goToInviteFriendsPage}>
          <Text style={[styles.button_text, { fontSize: 12 * scale }]}>
            Invite Your Friends
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateImpactBanner;
