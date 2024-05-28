import { Feather, Fontisto } from "@expo/vector-icons";
import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { SearchBarProps } from "../props/SearchBarProps";
import styles from "../styles/StoreSearchBarStyles";

const StoreSearchbar: React.FC<SearchBarProps> = ({ onSearch, onClick, wantBackBtn, onSearchClose, onOptionsClick, onSubmit, wantOptions=false }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if(onSubmit)
    onSubmit();
  };

  const handleClick = () => {
    if(onClick)
      onClick();  
  };

  const handleClose = () => {
    if(onSearchClose)
      onSearchClose();
  };

  const handleTextChange = (text: string) => {
    setQuery(text);
    onSearch && onSearch(text);
  };

  const wantBackButton = wantBackBtn ? <Feather name="arrow-left" size={20} color="#878787" onPress={handleClose} /> : null;

  return (
    <View style={[styles.container]}>
      {wantBackButton || <Feather name="search" size={20} color="#878787" />}
      <TextInput
        style={styles.input}
        placeholder="Search Stores"
        value={query}
        onChangeText={handleTextChange}
        onSubmitEditing={handleSearch}
        onPressIn={handleClick}
      />
      {wantOptions && <Fontisto
        name="equalizer"
        size={15}
        color="#878787"
        style={styles.icon}
        onPress={onOptionsClick}
      />}
    </View>
  );
};

export default StoreSearchbar;
