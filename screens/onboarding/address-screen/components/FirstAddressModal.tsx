import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Button from "../../../../components/buttons/button/Button";
import styles from "../styles/FirstAddressModalStyles";
import { FirstAddressModalProps } from "../props/FirstAddressModalProps";
import { Feather } from "@expo/vector-icons";

const FirstAddressModal = ({ onButtonPress, onSearchBarPress }: FirstAddressModalProps) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text_heading}>What's your address?</Text>
            <TouchableOpacity style={styles.search_bar} onPress={onSearchBarPress} activeOpacity={1}>
                <Feather name="search" size={20} color="#B2B2B2" />
                <Text style={styles.search_bar_text}>Search for your address</Text>
            </TouchableOpacity>
            <Button onPress={onButtonPress} button_style={styles.btn} text_style={styles.btn_text} disabled>
                <Text>Confirm</Text>
            </Button>
        </View>
    )
}

export default FirstAddressModal;
