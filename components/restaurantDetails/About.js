import { View, Text, Image } from "react-native";
import React from "react";

export default function About(props) {
  console.log(props.route.params.image);
  const { name, image, price, reviews, rating, categories } =
    props.route.params;
  const formatCategories = categories.map((cat) => cat.title).join(" . ");
  const description = `${formatCategories} ${
    price ? " . " + price : ""
  }. 🎫 . ${rating} 🌟 (${reviews} )`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}
const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);
const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);
const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontSize: 15.5,
      fontWeight: "400",
    }}
  >
    {props.description}
  </Text>
);
