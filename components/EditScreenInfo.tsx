import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ExternalLink } from "./external-link/ExternalLink";

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.helpContainer}>
        <ExternalLink style={styles.helpLink} href="https://quiikmart.com">
          <Text style={styles.helpLinkText}>
            Tap to go to the QuiikMart website
          </Text>
        </ExternalLink>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
    color: "#2e78b7",
  },
});
