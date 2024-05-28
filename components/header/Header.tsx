import { View, Text, Dimensions, Touchable } from "react-native";
import React from "react";
import { headerStyles } from "./styles";
import { useRouter } from "expo-router";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { HeaderProps } from "./props";
import { styles } from "../../screens/account/account-screen/components/account-links/account-link/styles";
import { TouchableOpacity } from "react-native";

const Header: React.FC<HeaderProps> = ({
  title,
  hasSeperator,
  hasButton,
  isCloseButton,
}) => {
  const router = useRouter();

  function goBack() {
    console.log("pressed");
    router.back();
  }

  const width = Dimensions.get("window").width;

  const scale = width / 430;

  return (
    <View style={headerStyles.container}>
      {hasButton &&
        (isCloseButton ? (
          <TouchableOpacity style={styles.button} onPress={goBack}>
            <AntDesign name="close" size={20} color="black" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={goBack}
            style={{
              marginTop: -15,
            }}
          >
            <AntDesign name="arrowleft" size={28 * scale} color="black" />
          </TouchableOpacity>
        ))}
      <Text
        style={[
          headerStyles.title,
          { fontSize: headerStyles.title.fontSize * scale },
        ]}
      >
        {title}
      </Text>
      {hasButton && <View style={{ width: 30 }} />}
      {hasSeperator && <View style={headerStyles.seperator} />}
    </View>
  );
};

export default Header;
