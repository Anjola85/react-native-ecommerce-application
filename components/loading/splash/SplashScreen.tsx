import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LoadingIcon from "../spinners/LoadingIcon";
import { theme } from "../../../constants/theme";

const SplashScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Quick<Text style={{color:'#1D1D35'}}>Mart</Text></Text>
            <LoadingIcon size={55}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: theme.colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 38,
        marginBottom: 20,
    },
});

export default SplashScreen;
