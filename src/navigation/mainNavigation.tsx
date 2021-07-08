import React, { FC, useState, useEffect } from "react";
import firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
import Appstack from "./appstack";
import Authstack from "./authstack";

const MainNavigation: FC = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
      switcher()
  }, [])

  const switcher = () => {
    firebase.auth().onAuthStateChanged(_user => {
        if(_user) {
            setUser(_user);
        }
    })
  }

  return <NavigationContainer>
      {user !== null ? <Appstack /> : <Authstack /> }
  </NavigationContainer>;
};

export default MainNavigation;
