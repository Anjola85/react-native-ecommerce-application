import { Text, View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import styles from '../styles/NoNotificationsStyles';

const NoNotifications = () => {
    return (
        <View style={styles.container}>
            <SimpleLineIcons name="bell" size={32} color="black" />
            <Text style={styles.heading}>You're all caught up</Text>
            <Text style={styles.message}>New notifications from Quiikmart will appear here once they arrive.</Text>
        </View>
    )
}

export default NoNotifications;
