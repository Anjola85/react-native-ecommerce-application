import { StyleSheet } from 'react-native';
import { theme } from '../../../constants/theme';

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        width: '100%',
    },
    title: {
        fontSize: theme.fontSizes.large,
        fontFamily: theme.fontFamily.bold,
        marginBottom: 50,
    },
    ratingContainer: {
        flexDirection: 'row',
        marginBottom: 30,
        width: '80%',
        alignSelf: 'center',
        backgroundColor: 'rgba(242, 242, 242, 1)',
        borderRadius: 10,
        height: 55,
    },
    ratingButton: {
        flex: 1,
        padding: 12,
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center',
    },
    middleRatingButton: {
        borderLeftWidth: 1,
        borderLeftColor: 'rgba(151, 151, 151, 0.2)',
    },
    ratingText: {
        fontSize: 14,
        fontFamily: theme.fontFamily.semibold,
        color: 'rgba(151, 151, 151, 1)',
    },
    clearText: {
        fontSize: 18,
        fontFamily: theme.fontFamily.bold,
        color: '#000',
        textAlign: 'center',
    },
    confirmButton: {
        backgroundColor: theme.colors.primary,
        width: '80%',
        alignSelf: 'center',
        marginBottom: 10,
        borderRadius: 50,
    },
    confirmButtonText: {
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fontFamily.bold,
        color: '#fff',
    },
    separator: {
        height: 45,
        width: 1,
        backgroundColor: 'rgba(151, 151, 151, 0.2)',
        alignSelf: 'center',
    }
});
