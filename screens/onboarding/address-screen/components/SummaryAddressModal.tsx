import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "../styles/SummaryAddressModalStyles";
import { SummaryAddressModalProps } from "../props/SummaryAddressModalProps";
import { Feather, Entypo } from "@expo/vector-icons";
import Button from "../../../../components/buttons/button/Button";

const SummaryAddressModal = ({ address, onConfirm, onEdit, onBack }:SummaryAddressModalProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.address_container}>
                <Feather name="map-pin" size={20} color="#601124" onPress={onBack}/>
                <View style={styles.address}>
                    <Text style={styles.main_address}>{address.main_address}</Text>
                    <Text style={styles.secondary_address}>{address.secondary_address}</Text>
                </View>
                <Feather name="edit-2" size={20} color="#601124" onPress={onEdit} style={{marginLeft: 'auto'}}/>
            </View>

            <View style={styles.info_container}>
                <Entypo name="help-with-circle" size={20} color="#B2B2B2" />
                <Text style={styles.info_text}>
                    We will show stores close to this address and your driver will deliver to this
                    pinned location. You can always change your address later.
                </Text>
            </View>

            <Button onPress={onConfirm} button_style={styles.btn} text_style={styles.btn_text}>
                <Text>Confirm</Text>
            </Button>
        </View>
    )
}

export default SummaryAddressModal;
