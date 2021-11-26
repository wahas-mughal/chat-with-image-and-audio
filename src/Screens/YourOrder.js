import React from "react";
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
  Picker,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Card } from "react-native-elements";
import { ImagePicker } from "expo";
import { RadioButton } from "react-native-paper";
import CheckBox from "@react-native-community/checkbox";

export default class YourOrder extends React.Component {
  static navigationOptions = {
    title: "Order4",
    headerShown: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      UserEmail: "",
      UserPassword: "",
      choosenIndex: 0,
      Id: "",
      textInput: [],
      inputData: [],
      check: false,
    };
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.load();
  //   }, 8000);
  // }
  // load = () => {
  //   this.props.navigation.navigate("Login");
  // };
  checkBox() {
    this.setState({
      check: !this.state.check,
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="#fa602e" barStyle="light-content" />
        <View style={styles.bigbox}>
          <View style={{ marginLeft: "4%" }}>
            <Text style={{ color: "#e4712a", fontSize: 16 }}>
              <MaterialCommunityIcons
                type="Ionicons"
                name="calendar-outline"
                color="#e4712a"
                size={25}
                style={{ padding: 3 }}
              />
              2021-09-23
            </Text>
            <Text
              style={{
                color: "#e4712a",
                marginTop: "-6.5%",
                marginLeft: "50%",
                fontSize: 16,
              }}
            >
              <MaterialCommunityIcons
                type="AntDesign"
                name="clock"
                color="#e4712a"
                size={20}
                style={{ padding: 3 }}
              />
              12:20:00
            </Text>
          </View>
          <View style={{ marginLeft: "4%" }}>
            <Text style={{ color: "#e4712a", fontSize: 16 }}>
              <MaterialCommunityIcons
                name="truck-check"
                color="#e4712a"
                size={20}
                style={{ padding: 3 }}
              />
              Heavy Equipm..
            </Text>
            <Text
              style={{
                color: "#e4712a",
                marginTop: "-6.5%",
                marginLeft: "50%",
                fontSize: 16,
              }}
            >
              <Icon
                type="Foundation"
                name="dollar"
                color="#e4712a"
                size={20}
                style={{ padding: 3, width: 20 }}
              />
              2522.00 SAR
            </Text>
          </View>
          <View style={{ marginLeft: "4%" }}>
            <Text style={{ color: "#e4712a", fontSize: 16 }}>
              <Icon
                type="Foundation"
                name="map-marker"
                color="#e4712a"
                size={20}
                style={{ padding: 3 }}
              />
              3303 As Sulaimaniyah St, Sahifah District, Jeddah 22237 7069,
              Saudi Arabia
            </Text>
          </View>
          <View style={{ marginTop: "2%", marginLeft: "4%" }}>
            <Text style={{ color: "#e4712a", fontSize: 16 }}>
              <MaterialCommunityIcons
                name="account-cash"
                color="#e4712a"
                size={25}
                style={{ padding: 3 }}
              />
              Status
            </Text>
            <Text
              style={{
                color: "#0895fb",
                marginTop: "-6.5%",
                marginLeft: "50%",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Not Yet Accepted
            </Text>
          </View>
        </View>
        <View style={styles.lowerbed}>
          <View style={{ marginLeft: "4%" }}>
            <Text
              style={{ color: "#e4712a", fontSize: 16, textAlign: "center" }}
            >
              <MaterialCommunityIcons
                type="Foundation"
                name="truck-outline"
                color="#e4712a"
                size={30}
                style={{ textAlign: "center", color: "#303030" }}
              />
            </Text>
            <Text
              style={{
                textAlign: "center",
                paddingTop: 5,
                fontSize: 16,
                fontWeight: "bold",
                color: "#bdbdbd",
              }}
            >
              lowerbed
            </Text>
          </View>
        </View>
        <View style={styles.bigbox2}>
          <View style={{ marginLeft: "4%" }}>
            <Text style={{ color: "#e4712a", fontSize: 16 }}>
              <MaterialCommunityIcons
                type="Ionicons"
                name="calendar-outline"
                color="#e4712a"
                size={25}
                style={{ padding: 3 }}
              />
              2021-09-23
            </Text>
            <Text
              style={{
                color: "#e4712a",
                marginTop: "-6.5%",
                marginLeft: "50%",
                fontSize: 16,
              }}
            >
              <MaterialCommunityIcons
                type="AntDesign"
                name="clock"
                color="#e4712a"
                size={20}
                style={{ padding: 3 }}
              />
              12:20:00
            </Text>
          </View>
          <View style={{ marginLeft: "4%" }}>
            <Text style={{ color: "#e4712a", fontSize: 16 }}>
              <MaterialCommunityIcons
                name="truck-check"
                color="#e4712a"
                size={20}
                style={{ padding: 3 }}
              />
              Heavy Equipm..
            </Text>
            <Text
              style={{
                color: "#e4712a",
                marginTop: "-6.5%",
                marginLeft: "50%",
                fontSize: 16,
              }}
            >
              <Icon
                type="Foundation"
                name="dollar"
                color="#e4712a"
                size={20}
                style={{ padding: 3, width: 20 }}
              />
              2522.00 SAR
            </Text>
          </View>
          <View style={{ marginLeft: "4%" }}>
            <Text style={{ color: "#e4712a", fontSize: 16 }}>
              <Icon
                type="Foundation"
                name="map-marker"
                color="#e4712a"
                size={20}
                style={{ padding: 3 }}
              />
              3303 As Sulaimaniyah St, Sahifah District, Jeddah 22237 7069,
              Saudi Arabia
            </Text>
          </View>
          <View style={{ marginTop: "2%", marginLeft: "4%" }}>
            <Text style={{ color: "#e4712a", fontSize: 16 }}>
              <MaterialCommunityIcons
                name="account-cash"
                color="#e4712a"
                size={25}
                style={{ padding: 3 }}
              />
              Status
            </Text>
            <Text
              style={{
                color: "#0895fb",
                marginTop: "-6.5%",
                marginLeft: "50%",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Not Yet Accepted
            </Text>
          </View>
        </View>
        <View style={styles.lowerbed2}>
          <View style={{ marginLeft: "4%" }}>
            <Text
              style={{ color: "#e4712a", fontSize: 16, textAlign: "center" }}
            >
              <MaterialCommunityIcons
                type="Foundation"
                name="truck-outline"
                color="#e4712a"
                size={30}
                style={{ textAlign: "center", color: "#303030" }}
              />
            </Text>
            <Text
              style={{
                textAlign: "center",
                paddingTop: 5,
                fontSize: 16,
                fontWeight: "bold",
                color: "#bdbdbd",
              }}
            >
              lowerbed
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  box: {
    height: 130,
    width: "90%",
    backgroundColor: "#fbeae0",
    marginLeft: "5%",
    borderRadius: 25,
    marginTop: "5%",
    elevation: 10,
    marginBottom: "2%",
  },
  bigbox: {
    padding: 10,
    paddingTop: 50,
    width: "90%",
    marginLeft: "5%",
    marginTop: 80,
    backgroundColor: "white",
    marginBottom: "2%",
    borderRadius: 30,
    borderColor: "#494949",
    borderWidth: 2,
    overflow: "hidden",
  },
  lowerbed: {
    position: "absolute",
    width: 140,
    height: 70,
    marginLeft: 50,
    marginTop: 50,
    backgroundColor: "white",
    marginBottom: "2%",
    borderRadius: 10,
    borderColor: "#494949",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  bigbox2: {
    padding: 10,
    paddingTop: 50,
    width: "90%",
    marginLeft: "5%",
    marginTop: 50,
    backgroundColor: "white",
    marginBottom: "2%",
    borderRadius: 30,
    borderColor: "#494949",
    borderWidth: 2,
    position: "relative",
    zIndex: -100000,
  },
  lowerbed2: {
    position: "absolute",
    marginTop: 310,
    zIndex: -100000,
    width: 140,
    height: 70,
    marginLeft: 50,
    zIndex: 10000,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "#494949",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
