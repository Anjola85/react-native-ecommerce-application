import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { StarFilteringProps } from "../props";
import { theme } from "../../../constants/theme";
import styles from "../styles/StarFilteringStyles";
import Button from "../../buttons/button/Button";

const COLOR_THEME = theme.colors.primary;
const ratings: string[] = ["Any", "2", "3", "4", "5"];

const StarFiltering = ({ onClose }: StarFilteringProps) => {
  const [selectedRating, setSelectedRating] = useState<string>("Any");

  const handleRatingSelect = (rating: string) => {
    setSelectedRating(rating);
  };

  const handleConfirm = () => {
    const number = Number(selectedRating);
    if (isNaN(number)) {
      onClose(-1);
      return;
    }
    onClose(number);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Star Ratings</Text>
      <View style={styles.ratingContainer}>
        {ratings.map((rating, index) => {
          if (selectedRating === rating) {
            return (
              <React.Fragment key={index}>
                <TouchableOpacity
                  style={[
                    { ...styles.ratingButton, backgroundColor: COLOR_THEME },
                  ]}
                  onPress={() => handleRatingSelect(rating)}
                >
                  {index === 0 ? (
                    <Text
                      style={{
                        ...styles.ratingText,
                        color: "#fff",
                        fontSize: theme.fontSizes.medium,
                      }}
                    >
                      {rating}
                    </Text>
                  ) : (
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <Text style={{ ...styles.ratingText, color: "#fff" }}>
                        +
                      </Text>
                      <Text style={{ ...styles.ratingText, color: "#fff" }}>
                        {rating}
                      </Text>
                      {/* <Ionicons name="md-star" size={17} color="#fff" /> */}
                      <AntDesign name="star" size={20} color="black" />
                    </View>
                  )}
                </TouchableOpacity>
                {index !== ratings.length - 1 && (
                  <View style={styles.separator}></View>
                )}
              </React.Fragment>
            );
          }
          return (
            <React.Fragment key={index}>
              <TouchableOpacity
                style={[styles.ratingButton]}
                onPress={() => handleRatingSelect(rating)}
              >
                {index === 0 ? (
                  <Text style={{ ...styles.ratingText, fontSize: 17 }}>
                    {rating}
                  </Text>
                ) : (
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Text style={styles.ratingText}>+</Text>
                    <Text style={styles.ratingText}>{rating}</Text>
                    {/* <Ionicons name="md-star" size={17} color="rgba(151, 151, 151, 1)" /> */}
                    <AntDesign name="star" size={20} color="black" />
                  </View>
                )}
              </TouchableOpacity>
              {index !== ratings.length - 1 && (
                <View style={styles.separator}></View>
              )}
            </React.Fragment>
          );
        })}
      </View>
      <Button onPress={handleConfirm} button_style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>View Results</Text>
      </Button>
      <TouchableOpacity
        onPress={() => {
          handleRatingSelect("Any");
        }}
        style={{ alignSelf: "center" }}
      >
        <Text style={styles.clearText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StarFiltering;
