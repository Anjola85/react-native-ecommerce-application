import { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { notifications } from "../data/notifications";
import NotificationCard from "./NotificationCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NoNotifications from "./NoNotifications";
import NotificationsLoading from "./NotificationsLoading";

const NotificationList = () => {
    const [contentState, setContentState] = useState("loading");
    const [notificationData, setNotificationData] = useState<
    {
        id: string,
        emoji: string,
        message: string,
        time: number,
        action: () => void,
        isRead: boolean,
    }[]>([]);

    const renderNotification = ({
        item
    }: { item: {
        id: string,
        emoji: string,
        message: string,
        time: number,
        action: () => void, 
        isRead: boolean,
    } }) => {
        return (
            <NotificationCard emoji={item.emoji} isRead={item.isRead} message={item.message} time={item.time} onPress={item.action} id={item.id} />
        )
    };

    useEffect(() => {
        const modifyNotificationData = async () => {
            const modifiedData = await Promise.all(notificationData.map(async (item) => {
                let isNotificationRead: boolean = false;
                const id = item.id;
                const data = await AsyncStorage.getItem(`notification_id:${id}`);
                if (data) {
                    isNotificationRead = JSON.parse(data);
                } 
                return {
                    ...item,
                    isRead: isNotificationRead
                }
            }));
            setNotificationData(modifiedData);
            if (modifiedData.length === 0) {
                setContentState("empty");
            } else {
                setContentState("loaded");
            }
        }
        modifyNotificationData();
    }, []);

    const returnComponent = () => {
        switch (contentState) {
            case "loading":
                return <NotificationsLoading />;
            case "empty":
                return <NoNotifications />;
            case "loaded":
                return (
                    <FlatList
                        data={notificationData}
                        renderItem={renderNotification}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                )
            default:
                return <NotificationsLoading />;
        }
    }

    return  <>{returnComponent()}</>
}

export default NotificationList;
