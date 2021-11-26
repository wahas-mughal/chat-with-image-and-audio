import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
  Image,
  Keyboard,
  ScrollView,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import CheckBox from "@react-native-community/checkbox";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

export default class Topup extends React.Component {
  static navigationOptions = {
    title: "Login",
    headerShown: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      UserEmail: "",
      UserPassword: "",
      Id: "",
      check: false,
    };
  }

  checkBox() {
    this.setState({
      check: !this.state.check,
    });
  }

  render() {
    return (
      <ScrollView>
        <StatusBar backgroundColor="#FF8C00" barStyle="light-content" />
        <View>
          <LinearGradient
            colors={["#c34836", "#ea854a"]}
            start={{
              x: 0,
              y: 0,
            }}
            end={{
              x: 1,
              y: 1,
            }}
            style={styles.headerbg}
          >
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Wallet");
              }}
            >
              <Text style={styles.headertext}>
                <MaterialCommunityIcons
                  name="arrow-left"
                  color="#ffffff"
                  size={25}
                  style={{ padding: 20 }}
                />
                {"  "}
                TOP UP
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View>
          <Text style={styles.titletext}>Choose top up amount</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor:
              this.state.selectedButton === "button1" ? "#e5702a" : "#eeeeee",
            marginTop: 10,
            marginLeft: "5%",
            borderRadius: 2,
            width: "90%",
            padding: 20,
            marginBottom: 5,
            borderColor: "#cccccc", // if you need
            borderWidth: 1,
            overflow: "hidden",
            shadowColor: "#666666",
            shadowRadius: 50,
            shadowOpacity: 1,
          }}
          onPress={() => this.setState({ selectedButton: "button1" })}
        >
          <Text style={styles.boxtext}>SAR 100</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor:
              this.state.selectedButton === "button2" ? "#e5702a" : "#eeeeee",
            marginTop: 10,
            marginLeft: "5%",
            borderRadius: 2,
            width: "90%",
            padding: 20,
            marginBottom: 5,
            borderColor: "#cccccc", // if you need
            borderWidth: 1,
            overflow: "hidden",
            shadowColor: "#666666",
            shadowRadius: 50,
            shadowOpacity: 1,
          }}
          onPress={() => this.setState({ selectedButton: "button2" })}
        >
          <Text style={styles.boxtext}>SAR 300</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor:
              this.state.selectedButton === "button3" ? "#e5702a" : "#eeeeee",
            marginTop: 10,
            marginLeft: "5%",
            borderRadius: 2,
            width: "90%",
            padding: 20,
            marginBottom: 5,
            borderColor: "#cccccc", // if you need
            borderWidth: 1,
            overflow: "hidden",
            shadowColor: "#666666",
            shadowRadius: 50,
            shadowOpacity: 1,
          }}
          onPress={() => this.setState({ selectedButton: "button3" })}
        >
          <Text style={styles.boxtext}>SAR 500</Text>
        </TouchableOpacity>
        <View>
          <TextInput
            style={styles.textbox}
            placeholder="Enter other amount"
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.boxstyle}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.logbutton1}>Pay Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
  },
  headerbg: {
    borderBottomLeftRadius: 125,
    height: 80,
    borderTopRightRadius: 0,
    justifyContent: "center",
  },
  headertext: {
    padding: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  headericon: { width: 50 },
  titletext: {
    textAlign: "center",
    padding: 20,
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  box: {
    marginTop: 10,
    marginLeft: "5%",
    backgroundColor: "#eeeeee",
    borderRadius: 2,
    width: "90%",
    padding: 20,
    marginBottom: 5,
    borderColor: "#cccccc", // if you need
    borderWidth: 1,
    overflow: "hidden",
    shadowColor: "#666666",
    shadowRadius: 50,
    shadowOpacity: 1,
  },
  boxActive: {
    backgroundColor: "#e5702a",
  },
  boxtext: {
    fontSize: 18,
    textTransform: "uppercase",
  },
  textbox: {
    marginTop: 10,
    marginLeft: "5%",
    backgroundColor: "#eeeeee",
    borderRadius: 2,
    width: "90%",
    padding: 20,
    marginBottom: 5,
    borderColor: "#cccccc", // if you need
    borderWidth: 1,
    overflow: "hidden",
    shadowColor: "#666666",
    shadowRadius: 50,
    shadowOpacity: 1,
  },
  boxstyle: {
    marginTop: 10,
    backgroundColor: "#eeeeee",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  button: {
    padding: 20,
    width: "80%",
    // borderWidth: 2,
    borderRadius: 50,
    marginTop: "5%",
    alignContent: "center",
    alignItems: "center",
    marginLeft: "0%",
    width: "90%",
    justifyContent: "center",
    backgroundColor: "#e5702a",
  },
  logbutton1: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
  text1: {
    marginLeft: "18%",
    marginTop: "5%",
    height: 50,
  },
});
