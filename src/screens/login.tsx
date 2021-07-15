import React, { FC, useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Input from "../components/input";
import Button from "../components/button";

var {width, height} = Dimensions.get("screen");

const Login: FC = () => {

  const [inputs, setInputs] = useState<object>({
    username: "",
    password: ""
  })

  console.log("Inputs", inputs);

  const handleInputChange = (e, from) => {
    if(from == "password") {
      setInputs({
        ...inputs,
        password: e
      })
    } else if(from === "username"){
      setInputs({
        ...inputs,
        username: e
      })
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <Input capitalize="none" onChangeText={(e) => handleInputChange(e, "username")} placeholder="Enter username" />
      <Input safeArea onChangeText={(e) => handleInputChange(e, "password")} placeholder="Enter password" />
      <Button onPressFunc={() => console.log("Clicked")} title="Login" />
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
    marginBottom: 30
  },
});

export default Login;
