import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NotificationCardProps } from "../props";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles/NotificationCardStyles";

const NotificationCard = ({ emoji, isRead, message, time, onPress, id }: NotificationCardProps) => {
    const [messageRead, setMessageRead] = useState(isRead);
    const emojiString = String.fromCodePoint(parseInt(emoji.substring(2), 16));
    const notificationColor = messageRead ? styles.read : styles.unread;

    const clickHandler = () => {
        onPress();

        // mark notification as read
        AsyncStorage.setItem(`notification_id:${id}`, JSON.stringify(true));
        setMessageRead(true);
    }

    const beutifyTime = (epoch: number): string => {
        const seconds = Math.floor((new Date().getTime() - epoch) / 1000);

        let interval = seconds / 31536000; // seconds in a year
        if (interval > 1) return `${Math.floor(interval)} year${Math.floor(interval) !== 1 ? 's' : ''} ago`;
    
        interval = seconds / 2592000; // seconds in a month
        if (interval > 1) return `${Math.floor(interval)} month${Math.floor(interval) !== 1 ? 's' : ''} ago`;
    
        interval = seconds / 604800; // seconds in a week
        if (interval > 1) return `${Math.floor(interval)} week${Math.floor(interval) !== 1 ? 's' : ''} ago`;
    
        interval = seconds / 86400; // seconds in a day
        if (interval > 1) return `${Math.floor(interval)} day${Math.floor(interval) !== 1 ? 's' : ''} ago`;
    
        interval = seconds / 3600; // seconds in an hour
        if (interval > 1) return `${Math.floor(interval)} hour${Math.floor(interval) !== 1 ? 's' : ''} ago`;
    
        interval = seconds / 60; // seconds in a minute
        if (interval > 1) return `${Math.floor(interval)} minute${Math.floor(interval) !== 1 ? 's' : ''} ago`;
    
        return `${seconds} second${seconds !== 1 ? 's' : ''} ago`; // seconds
    }


    return (
        <TouchableOpacity style={[styles.container, notificationColor]} onPress={clickHandler}>
            <Text style={styles.emoji}>{emojiString}</Text>
            <View style={styles.message_container}>
                <Text style={styles.message}>{message}</Text>
                <Text style={styles.time}>{beutifyTime(time)}</Text>
            </View>
        </TouchableOpacity>
    )
};

export default NotificationCard;
