import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Feather } from "@expo/vector-icons";
import { PillButtonGroupProps } from "../props";
import styles from "../styles/PillButtonGroupStyles";

const PillButtonGroup = ({ theme_color="#000", onButtonPress }:PillButtonGroupProps) => {
    const [activeButton, setActiveButton] = useState(0)

    const buttons: {name: "nearby" | "open" | "ratings", component: JSX.Element}[] = [
        {
            name: "nearby",
            component: (
            <>
                <Feather name="navigation" size={12} color={`${activeButton === 0 ? "#fff" : "#000"}`} />
                <Text style={[styles.option_text, activeButton === 0 ? {color: "#fff"} : {color: "#000"}]}>Nearby</Text>
            </>
            )
        },
        {
            name: "open",
            component: (
                <>
                    <Feather name="clock" size={12} color={`${activeButton === 1 ? "#fff" : "#000"}`} />
                    <Text style={[styles.option_text, activeButton === 1 ? {color: "#fff"} : {color: "#000"}]}>Open</Text>
                </>
            )
        },
        {
            name: "ratings",
            component: (
            <>
                <Feather name="star" size={12} color={`${activeButton === 2 ? "#fff" : "#000"}`} />
                <Text style={[styles.option_text, activeButton === 2 ? {color: "#fff"} : {color: "#000"}]}>Ratings</Text>
                <Feather name="chevron-down" size={14} style={{marginLeft:6}} color={`${activeButton === 2 ? "#fff" : "#000"}`} />
            </>
            )
        },
    ]

    const handleButtonPress = (button: number) => {
        setActiveButton(button)

        const found = buttons.find((_, index) => index === button)
        if (found) 
            onButtonPress(found.name)
    }

    return (
        <View style={styles.pill_container}>
            {buttons.map((button, index) => (
                <TouchableOpacity 
                    key={index} 
                    style={[styles.option, activeButton === index ? {backgroundColor: theme_color, borderColor: theme_color,} : { backgroundColor: "#fff", borderColor: "#EFEFEF",}]} 
                    onPress={() => handleButtonPress(index)}
                >
                    {button.component}
                </TouchableOpacity>
            ))}
        </View>
    );
}

export default PillButtonGroup
