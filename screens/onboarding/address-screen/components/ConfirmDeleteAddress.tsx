import { useState } from "react";
import { theme } from "../../../../constants/theme";
import { Text, View, StyleSheet } from "react-native";
import { deleteAddress } from "../../../../api/endpoints/userApi";
import Button from "../../../../components/buttons/button/Button";
import LoadingButton from "../../../../components/buttons/loading-button/LoadingButton";
import { AddressListRespDto, AddressRespDto } from "../../../../api/api-contracts/user/responses/address.response";

interface ConfirmDeleteAddressProps {
    onDelete?: () => void;
    address: AddressRespDto;
    onCancel: () => void;
}

const ConfirmDeleteAddress = ({ onCancel, address, onDelete: onConfirmDelete }: ConfirmDeleteAddressProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = async () => {
        setIsLoading(true);
        try {
            await deleteAddress(address.id);
            onConfirmDelete && onConfirmDelete();
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    }

    const handleCancel = () => {
        onCancel();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Delete Address</Text>
            <Text style={styles.text}>Are you sure you want to delete this address?</Text>
            <View style={styles.button_container}>
                <LoadingButton
                  isLoading={isLoading}
                  loadingIconSize={20}
                  onPress={handleDelete}
                  button_style={{
                    width: "50%",
                    maxWidth: 400,
                    borderRadius: 7,
                    marginBottom: 0,
                    backgroundColor: "#FF0000",
                  }}
                >
                    <Text style={[{ color: "#fff" }]}>
                        Delete
                    </Text>
                </LoadingButton>
                    <Button
                      onPress={handleCancel}
                      button_style={{
                        width: "50%",
                        maxWidth: 400,
                        borderRadius: 7,
                        marginBottom: 0,
                        backgroundColor: "#979797",
                      }}
                >
                    <Text style={[{ color: "#fff" }]}>
                        Cancel
                    </Text>
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    heading: {
        fontSize: 20,
        fontFamily: theme.fontFamily.bold,
        textAlign: 'center'
    },
    text: {
        fontSize: 16,
        marginTop: 10,
        textAlign: 'center',
        fontFamily: theme.fontFamily.regular,
    },
    button_container: {
        flexDirection: "row",
        gap: 10,
        marginTop: 40,
        justifyContent: 'center'
    }
})

export default ConfirmDeleteAddress;
