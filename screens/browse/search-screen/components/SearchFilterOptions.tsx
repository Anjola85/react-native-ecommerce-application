import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../../../constants/theme";
import Button from "../../../../components/buttons/button/Button";
import styles from "../styles/SearchFilterOptionStyles";

const SearchFilterOptions = () => {
    const [selectedRadio, setSelectedRadio] = useState<number>(0);

    const closeModal = () => {
        console.log('close modal')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header_component}>
                <Feather style={styles.close_btn} name="x" size={28} color="black" onPress={closeModal}/>
                <Text style={styles.header_text}>Filter</Text>
            </View>
            <Text>Search Filter Options</Text>

            <View style={styles.filter_category}>
                <Text style={styles.filter_category_text}>Sort By</Text>
                <View style={styles.radio_button_container}> 
                    <View style={[styles.address_option]}>
                    <TouchableOpacity
                        style={styles.radio_button}
                        // onPress={() => selectAddress(index)}
                    >
                        <View style={styles.radio}>
                        <View
                            style={{
                            width: 12,
                            height: 12,
                            borderRadius: 6,
                            backgroundColor:
                                selectedRadio === 0
                                ? theme.colors.primary
                                : theme.colors.grey,
                            margin: 4,
                            }}
                        ></View>
                        </View>
                        <Text style={styles.radio_button_text}> Best Match</Text>
                    </TouchableOpacity>
                    </View>

                    <View style={[styles.address_option]}>
                    <TouchableOpacity
                        style={styles.radio_button}
                        // onPress={() => selectAddress(index)}
                    >
                        <View style={styles.radio}>
                        <View
                            style={{
                            width: 12,
                            height: 12,
                            borderRadius: 6,
                            backgroundColor:
                                selectedRadio === 0
                                ? theme.colors.primary
                                : theme.colors.grey,
                            margin: 4,
                            }}
                        ></View>
                        </View>
                        <Text style={styles.radio_button_text}> Best Match</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.footer_component}>
                <Button onPress={() => {}} button_style={styles.footer_button}>
                    <Text>Reset</Text>
                </Button>
                <Button onPress={() => {}} button_style={styles.footer_button}>
                    <Text>Apply</Text>
                </Button>
            </View>
        </View>
    )
}

export default SearchFilterOptions;