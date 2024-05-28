export interface NotificationCardProps {
    id: string;
    message: string;
    emoji: string; // unicode emoji e.g. U+1F600
    time: number; // epoch time
    isRead: boolean;
    onPress: () => void;
}
