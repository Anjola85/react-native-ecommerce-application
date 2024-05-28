import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { ProfileTextBoxProps } from "../props";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProfileTextBox: React.FC<ProfileTextBoxProps> = ({
  label,
  initialValue,
  save,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  // TODO: ADD Validation
  function toggleEditSave() {
    const newEditState = !isEditing;

    setIsEditing(newEditState);

    if (newEditState) {
    } else {
      // save the local and global value
      save(value);
    }
  }

  return (
    <View style={styles.infoContainer}>
      <View>
        <Text style={styles.label}>{label}</Text>
        {isEditing ? (
          <TextInput
            value={value}
            onChangeText={setValue}
            style={styles.input}
            autoFocus
          />
        ) : (
          <Text style={styles.info}>{value}</Text>
        )}
      </View>
      {/* TODO: removed for pilot */}
      {/* <TouchableOpacity onPress={toggleEditSave}>
        <Text style={styles.btn_text}>{isEditing ? "Save" : "Edit"}</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(196, 196, 196, 0.21)",
    paddingVertical: 8,
    marginVertical: 10,
  },

  label: {
    fontSize: 15,
    fontFamily: "PoppinsRegular",
    color: "rgba(39, 38, 38, 0.60)",
    marginBottom: 5,
    letterSpacing: 0.5,
  },
  info: {
    fontSize: 14,
    color: "#333",
    fontFamily: "PoppinsRegular",
    letterSpacing: 0.5,
  },
  input: {
    fontFamily: "PoppinsRegular",
    letterSpacing: 0.5,
  },
  btn_text: {
    fontSize: 14,
    color: "#004449",
    fontFamily: "PoppinsRegular",
    letterSpacing: 0.5,
    paddingVertical: 5,
  },
});
export default ProfileTextBox;
