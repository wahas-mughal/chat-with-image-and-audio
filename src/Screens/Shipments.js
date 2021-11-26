import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class Shipments extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Shipments</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#e5702a",
            padding: 10,
            borderRadius: 10,
            marginTop: 10,
          }}
          onPress={() => this.props.navigation.navigate("orderdetails")}
        >
          <Text style={{ color: "#fff" }}> Go to order details</Text>
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
    justifyContent: "center",
  },
});
