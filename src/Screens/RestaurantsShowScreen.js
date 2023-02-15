import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";
import { FlatList } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

const RestaurantsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const windowWidth = Dimensions.get("window").width;

  const getRestaurants = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRestaurants(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginVertical: 7 }}>
        {result.name}
      </Text>
      <FlatList
        keyExtractor={(photo) => photo}
        showsVerticalScrollIndicator={false}
        data={result.photos}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={{ width: windowWidth - 20, height: 320, marginBottom: 10 }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default RestaurantsShowScreen;
