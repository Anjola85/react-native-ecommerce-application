import { View, Text } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { styles } from "./styles";
import { AccountLinkProps } from "./props";

import * as WebBrowser from "expo-web-browser";
import { TouchableOpacity } from "react-native-gesture-handler";

const AccountLink: React.FC<AccountLinkProps> = ({
  name,
  icon,
  hasNextPage = false,
  linkString = "",
}) => {
  const router = useRouter();

  function goToLinkedPage() {
    if (hasNextPage) {
      router.push(linkString as any);
    } else {
      WebBrowser.openBrowserAsync(linkString)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <TouchableOpacity onPress={goToLinkedPage} style={{ flex: 1 }}>
      <View style={styles.link}>
        <View style={styles.left}>
          {icon}
          <Text style={styles.link_text}>{name}</Text>
        </View>
        {hasNextPage && (
          <MaterialIcons
            name="navigate-next"
            size={30}
            color="#E6E6E6"
            style={{ alignSelf: "flex-end", maxHeight: 24 }}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default AccountLink;
