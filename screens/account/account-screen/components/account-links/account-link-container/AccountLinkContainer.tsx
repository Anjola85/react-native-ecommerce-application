import { View } from "react-native";
import React from "react";
import AccountLink from "../account-link/AccountLink";
import { styles } from "./styles";
import { AccountLinkContainerProps } from "./props";

const AccountLinkContainer: React.FC<AccountLinkContainerProps> = ({
  hasSeparator = false,
  data,
}) => {
  return (
    <View style={styles.link_container}>
      {data.map((item, index) => {
        return (
          <AccountLink
            name={item.name}
            icon={item.icon}
            linkString={item.linkString}
            hasNextPage={item.hasNextPage}
            key={index}
          />
        );
      })}
      {hasSeparator && <View style={styles.seperator} />}
    </View>
  );
};

export default AccountLinkContainer;
