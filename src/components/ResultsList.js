import {
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  View,
} from "react-native";
import React from "react";
import { withNavigation } from "react-navigation";
import RestaurantCard from "./RestaurantCard";

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        initialNumToRender={2}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("RestaurantsShow", { id: item.id });
            }}
          >
            <RestaurantCard
              imageUrl={item.image_url}
              name={item.name}
              rating={item.rating}
              review={item.review_count}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 10,
    fontSize: 22,
    fontWeight: "900",
    letterSpacing: 0.2,
    paddingBottom: 5,
  },
});

export default withNavigation(ResultsList);
