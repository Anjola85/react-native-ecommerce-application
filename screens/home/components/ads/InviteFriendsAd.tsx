import { View, Text, Dimensions } from "react-native";
import React from "react";
import { SvgComponent as InviteFriends } from "../../../../assets/svgs/HappyPeopleSvg";
import { inviteFriendStyles as styles } from "../../styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const InviteFriendsAd = () => {
  const screenWidth = Dimensions.get("window").width;

  const scale = screenWidth / 430;

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.content}>
        <Text style={[styles.title, { fontSize: 13 * scale }]}>
          Invite friends and get up to $100 in credits
        </Text>
        <Text style={[styles.sub_text, { fontSize: 12 * scale }]}>
          They spend up to CAD$100 and you both get CA$20
        </Text>
      </View>
      <View style={{ flexBasis: 70 }}>
        <InviteFriends width={79 * scale} height={79 * scale} />
      </View>
    </TouchableOpacity>
  );
};

export default InviteFriendsAd;
