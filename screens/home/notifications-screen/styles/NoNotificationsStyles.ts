import { StyleSheet } from 'react-native';
import { theme } from '../../../../constants/theme';

export default StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        height: '40%',
    },
    heading: {
        fontSize: 20,
        fontFamily: theme.fontFamily.semibold,
        color: theme.colors.black,
        marginVertical: 10,
    },
    message: {
        fontSize: 14,
        fontFamily: theme.fontFamily.regular,
        color: theme.colors.black,
        textAlign: 'center',
    },
});
