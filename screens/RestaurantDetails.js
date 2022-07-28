import { View, Text } from "react-native";
import React from "react";
import About from "../components/restaurantDetails/About";
import { Divider } from "react-native-elements";
import MenuItems from "../components/restaurantDetails/MenuItems";
import ViewCart from "../components/restaurantDetails/ViewCart";

const foods = [
  {
    title: "Lasagna",
    description: "With butter and mushroom , Tomato and Red chili",
    price: "12$",
    image:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
  },
  {
    title: "Pizza",
    description: "With butter and mushroom , Tomato and Red chili",
    price: "10$",
    image:
      "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
  },

  {
    title: "Chicken Caesar Salad",
    description:
      "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
    price: "$21.50",
    image:
      "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
  },
  {
    title: "BBQ",
    description: "With butter and mushroom , Tomato and Red chili",
    price: "2$",
    image:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
  },
  {
    title: "Potato Chip",
    description: "With butter and mushroom , Tomato and Red chili",
    price: "1$",
    image:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
  },
  {
    title: "Pork curry",
    description: "With butter and mushroom , Tomato and Red chili",
    price: "7",
    image:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
  },
];

export default function RestaurantDetails({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <View style={{ height: 620 }}>
        <MenuItems
          restaurantName={route.params.name}
          hideCheckbox={false}
          foods={foods}
          marginLeft={0}
        />
      </View>
      <ViewCart navigation={navigation} />
    </View>
  );
}
