import { AntDesign } from "@expo/vector-icons";
import { Platform, TouchableOpacity, View } from "react-native";

interface CloseButtonProps {
  searchText: string;
  clearAddressInput: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({
  searchText,
  clearAddressInput,
}) => {
  return Platform.OS !== "ios" && searchText ? (
    <TouchableOpacity
      onPress={clearAddressInput}
      style={{ justifyContent: "center", paddingRight: 10 }}
    >
      <AntDesign name="closecircle" size={18} color="#77777775" />
    </TouchableOpacity>
  ) : (
    <View />
  );
};

export default CloseButton;
