import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { theme } from '../../../../constants/theme';

const ManageNotifications = () => {
    const goToNotificationPreferences = () => {
        router.push('/account/notifications');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.main_text}>{`You're missing out on all our information including deals, new stores and more`}</Text>
            <TouchableOpacity onPress={goToNotificationPreferences}>
                <Text style={styles.link}>Manage Notifications</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#004449',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 30,
        borderRadius: 10,
        height: 95,
    },
    main_text: {
        fontSize: 14,
        color: theme.colors.black,
        fontFamily: theme.fontFamily.regular,
        marginBottom: 7,
    },
    link: {
        fontSize: 14,
        color: "#1E804C",
        fontFamily: theme.fontFamily.semibold,
    }
});

export default ManageNotifications;
