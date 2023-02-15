import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const RestaurantCard = ({ imageUrl, name, rating, review }) => {
  const checkLengthOfStr = (str) => {
    if (str.length > 25) {
      return str.substr(0, 20);
    } else return str;
  };

  return (
    <View style={{ margin: 10 }}>
      <Image
        source={{ uri: imageUrl }}
        style={{ width: 250, height: 150, borderRadius: 4 }}
      />
      <Text style={{ fontSize: 16, fontWeight: "700" }}>
        {checkLengthOfStr(name)}
      </Text>
      <Text style={{ opacity: 0.5 }}>
        {rating} <AntDesign name="star" size={16} color="black" />,
        <Text> {review} Reviews</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RestaurantCard;
