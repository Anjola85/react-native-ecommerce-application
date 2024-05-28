import { View, StyleSheet } from "react-native";
import Skeleton from "../../../../components/loading/skeletons/Skeleton";

export const SearchByRegionSkeleton = () => {
    return (
        <View style={{flex: 1, width: '100%'}}>
            <View style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <Skeleton height={110} width={100} style={{borderRadius: 10, margin:5}}/>
                <Skeleton height={110} width={100} style={{borderRadius: 10, margin:5}}/>
                <Skeleton height={110} width={100} style={{borderRadius: 10, margin:5}}/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <Skeleton height={110} width={100} style={{borderRadius: 10, margin:5}}/>
            </View>
        </View>
    )
}