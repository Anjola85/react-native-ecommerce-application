import { View, Text } from "react-native";
import React from "react";
import { SvgComponent as InviteFriends } from "../../../../../assets/svgs/HappyPeopleSvg";
import { inviteFriendStyles as styles } from "../../styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const InviteFriendsAd = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Invite friends and get up to $100 in credits
        </Text>
        <Text style={styles.sub_text}>
          They spend up to CAD$100 and you both get CA$20
        </Text>
      </View>
      <InviteFriends />
    </TouchableOpacity>
  );
};

export default InviteFriendsAd;
