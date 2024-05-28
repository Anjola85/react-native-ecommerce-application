import { Linking } from "react-native";
import { router } from "expo-router";

export const notifications = [
    {
        id: "1",
        emoji: "U+1F44B",
        message: "Welcome to Quiikmart, start browsing stores in your area",
        time: 1707699534935,
        action: () => {router.push("/(tabs)")},
        isRead: false,
    },
    {
        id: "2",
        emoji: "U+1F604",
        message: "New Stores just got added, start discovering them now!🥳",
        time: 1707704173402,
        action: () => {},
        isRead: false,
    },
    {
        id: "3",
        emoji: "U+1F514",
        message: "Join our newsletter to stay updated with us. Learn more!",
        time: 1707708483798,
        action: () => {Linking.openURL("https://www.quiikmart.com/contact-us")},
        isRead: false,
    },
    {
        id: "4",
        emoji: "U+1F609",
        message: "Stay connected with our diverse ethnic community. Learn more!",
        time: 1707709136799,
        action: () => {Linking.openURL("https://www.quiikmart.com")},
        isRead: false,
    },
];
