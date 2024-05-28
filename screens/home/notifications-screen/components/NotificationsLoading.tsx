import { View, Dimensions, StyleSheet } from "react-native";
import Skeleton from "../../../../components/loading/skeletons/Skeleton";

const { width } = Dimensions.get("window");

const NotificationsLoading = () => {
    return (
        <View style={styles.container}>
            <Skeleton width={width-20} height={75} style={{borderRadius: 5}} />
            <Skeleton width={width-20} height={75} style={{borderRadius: 5}} />
            <Skeleton width={width-20} height={75} style={{borderRadius: 5}} />
            <Skeleton width={width-20} height={75} style={{borderRadius: 5}} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        gap: 5,
    },
});

export default NotificationsLoading;
