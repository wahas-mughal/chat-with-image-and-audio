/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from "react";
import "react-native-gesture-handler";
import { View } from "react-native";
import Router from "./src/navigation/Router";
import * as firebase from "firebase";
import { RootSiblingParent } from "react-native-root-siblings";

const firebaseConfig = {
  apiKey: "AIzaSyDZNbXqB7Ow5J0ZTJfBiZVKSVFPbUvIn_A",
  authDomain: "chat-module-9ae2a.firebaseapp.com",
  projectId: "chat-module-9ae2a",
  storageBucket: "chat-module-9ae2a.appspot.com",
  messagingSenderId: "78599008902",
  appId: "1:78599008902:web:94ac003fe166d25d229707",
};

// Initialize Firebase

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default class App extends Component {
  render() {
    return (
      <RootSiblingParent>
        <View style={{ flex: 1 }}>
          <Router />
        </View>
      </RootSiblingParent>
    );
  }
}
