import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItem, {
  localRestaurants,
} from "../components/home/RestaurantItem";

const yelp_api_key =
  "rhtButtJmIsdkimHzXS8hI4MQ2c47buCKe7VRyrlR4tRseiBOIY2SnQA5YA1bIoOWLHF61J5wTTFBbvwtwp7WZtW8yXpZ95DSh-70lsq7DQp2e09s6HA5PiD-YurYXYx";
export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=HollyWood`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${yelp_api_key}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses));
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "#fff", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView>
        <Categories />
        <RestaurantItem restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
