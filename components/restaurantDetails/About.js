import { View, Text, Image } from "react-native";
import React from "react";

const yelpRestaurantInfo = {
  image:
    "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
  name: "Farmhouse Kitchen Thai Cuisine",
  price: "$$",
  reviews: "1500",
  rating: 4.5,
  category: [{ title: "Thai" }, { title: "Comfort Food " }],
};

const { name, image, category, price, reviews, rating } = yelpRestaurantInfo;

const formatCategories = category.map((cat) => cat.title).join(" . ");
const description = `${formatCategories} ${
  price ? " . " + price : ""
}. 🎫 . ${rating} 🌟 (${reviews} )`;

export default function About() {
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
