import { SvgUri } from "react-native-svg";
import { View, StyleSheet } from "react-native";

interface SvgIconProps {
    uri?: string;
    width?: number;
    height?: number;
}

const DEFAULT_URI = `https://quiikmart-version1-app.s3.ca-central-1.amazonaws.com/mobile_assets/category-1.svg`

const SvgIcon = ({ uri = DEFAULT_URI, width = 50, height = 50 }: SvgIconProps) => {
    return (
        <View style={styles.container}>
            <SvgUri
            uri={uri}
            width={String(width)}
            height={String(height)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default SvgIcon;
