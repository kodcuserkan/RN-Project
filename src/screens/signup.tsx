import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const Signup: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea",
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Signup;
