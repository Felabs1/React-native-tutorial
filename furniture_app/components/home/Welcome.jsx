import { View, Text } from "react-native";
import React from "react";
import styles from "./Welcome.style";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTxt}>Find the Most</Text>
    </View>
  );
};

export default Welcome;
