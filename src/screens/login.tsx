import React, { FC } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Input from "../components/input";

var {width, height} = Dimensions.get("screen");

const Login: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <Input />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea",
    alignSelf: "center",
    justifyContent: "center",
    width: width,
    height: height

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

export default Login;
