import { View, Text } from "react-native";
import React from "react";
import { QuestionLinkProps } from "../props/QuestionLinkProps";
import { questionLinkStyles as styles } from "../styles";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router, useRouter } from "expo-router";
import { ExternalLink } from "../../../../components/external-link/ExternalLink";

const QuestionLink: React.FC<QuestionLinkProps> = ({
  question,
  subText,
  hasBottomSeperator,
  hasTopSeperator = true,
}) => {
  const router = useRouter();

  function onPress() {
    router.push("https://quiikmart.com");
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {hasTopSeperator && <View style={styles.top_seperator} />}
      <View style={styles.subContainer}>
        <View style={styles.content}>
          <Text style={styles.question}>{question}</Text>
          <Text style={styles.subText}>{subText}</Text>
        </View>
        <AntDesign name="right" size={16} color="#333333" />
      </View>
      {hasBottomSeperator && <View style={styles.bottom_seperator} />}
    </TouchableOpacity>
  );
};

export default QuestionLink;
