import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function HeaderTabs(props) {
  return (
    <View style={styles.container}>
      <HeaderButton
        text="Delivery"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      paddingVertical: 6,
      paddingHorizontal: 16,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 30,
      backgroundColor: props.activeTab == props.text ? "black" : "white",
    }}
    onPress={() => {
      props.setActiveTab(props.text);
    }}
  >
    <View>
      <Text
        style={{
          color: props.activeTab == props.text ? "white" : "black",
          fontSize: 15,
          fontWeight: "900",
        }}
      >
        {props.text}
      </Text>
    </View>
  </TouchableOpacity>
);
