import { router } from 'expo-router';
import { View, Text } from 'react-native';
import { useState, useCallback } from "react";
import { AntDesign } from "@expo/vector-icons";
import { theme } from '../../../../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StoresNotFoundProps } from "../props/StoresNotFoundProps";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import StoreNotFoundSvg from '../../../../assets/svgs/StoreNotFoundSvg';
import styles from '../styles/SearchResultStyles';


const StoresNotFound = ({ onPageReload }: StoresNotFoundProps) => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        try {
            console.log("refreshing...");
            onPageReload && onPageReload();
        } finally {
            setRefreshing(false);
        }
    }, []);

    const navigateBack = () => {
        router.back();
    }

    return (
        <SafeAreaView style={styles.failed_container}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    />
                }
                showsVerticalScrollIndicator={false}
                style={{gap: 10}}
                contentContainerStyle={{
                    flexGrow: 1,
                    backgroundColor: "#fff",
                    zIndex: 1,
                }}
            >
                <View style={styles.result_header}>
                    <AntDesign 
                        name="arrowleft" 
                        size={32} 
                        color={theme.colors.black}
                        onPress={() => navigateBack()}
                        style={styles.back_icon}
                    />
                </View>
                <View style={styles.failed}>
                    <StoreNotFoundSvg />
                    <Text style={styles.failed_title}>No Results</Text>
                    <Text style={styles.failed_subtitle}>
                    We’re still bringing a lot of stores on board in the mean time try a different search or 
                    browse everything Quiikmart has in your area
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default StoresNotFound;
