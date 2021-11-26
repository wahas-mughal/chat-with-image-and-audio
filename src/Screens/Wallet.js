import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class Wallet extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titles1}>SAR</Text>
        <Text style={styles.titles2}>Wallet is empty</Text>
        <Text style={styles.titles1}>Available Credit</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("Topup");
          }}
        >
          <Text style={styles.logbutton1}>Top up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 100,
  },
  titles1: {
    color: "gray",
    fontSize: 28,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  titles2: {
    color: "black",
    fontSize: 30,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  button: {
    height: 40,
    width: "80%",
    // borderWidth: 2,
    borderRadius: 50,
    marginTop: "10%",
    alignContent: "center",
    alignItems: "center",
    marginLeft: "9%",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e5702a",
  },
  logbutton1: {
    fontWeight: "normal",
    fontSize: 18,
    color: "#e5702a",
  },
});
