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

export default class Registration extends React.Component {
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
        <TouchableOpacity style={styles.Signbutton}>
          <Text style={styles.signtext}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.fname}>
          <Text style={styles.fnametext}>FIRST NAME</Text>
        </View>
        <View>
          <TextInput
            style={styles.textbox}
            // placeholder="FIRST NAME"
            placeholderTextColor="#FF4500"
          />
        </View>
        <View style={styles.lname}>
          <Text style={styles.fnametext}>LAST NAME</Text>
        </View>
        <View>
          <TextInput
            style={styles.textbox}
            //  placeholder="LAST NAME"
            placeholderTextColor="#FF4500"
          />
        </View>
        <View style={styles.youremail}>
          <Text style={styles.youremailtext}>E-MAIL</Text>
        </View>
        <View>
          <TextInput
            style={styles.textbox}
            // placeholder="E-MAIL"
            placeholderTextColor="#FF4500"
            inlineImageLeft="username"
            inlineImagePadding={2}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.youremail}>
          <Text style={styles.youremailtext}>PHONE NUMBER</Text>
        </View>
        <View>
          <TextInput
            style={styles.textbox}
            //  placeholder="PHONE NUMBER"
            placeholderTextColor="#FF4500"
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.youremail}>
          <Text style={styles.youremailtext}>PASSWORD</Text>
        </View>
        <View>
          <TextInput
            style={styles.textbox}
            //   placeholder="Create your strong password"
            placeholderTextColor="#FF4500"
            inlineImageLeft="username"
            inlineImagePadding={2}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.youremail}>
          <Text style={styles.youremailtext}>CONFIRM PASSWORD</Text>
        </View>
        <View>
          <TextInput
            style={styles.textbox}
            //   placeholder="Repeat your password"
            placeholderTextColor="#FF4500"
            inlineImageLeft="username"
            inlineImagePadding={2}
            secureTextEntry={true}
          />
          <Text style={{ paddingLeft: "10%", marginTop: "1%" }}>
            ---------------------------------------------------------------------
          </Text>
        </View>
        <View style={{ marginLeft: "15%" }}>
          <CheckBox
            value={this.state.check}
            onChange={() => this.checkBox()}
            onCheckColor="#FF8C00"
          />
          <Text style={{ marginTop: "-8%", marginLeft: "10%" }}>
            Accept the Terms and Condition
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.logbutton1}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.text1}
          onPress={() => {
            this.props.navigation.navigate("Login");
          }}
        >
          {/* <Text>Don't you have an account </Text>
          <Text
            style={{fontWeight: 'bold', marginTop: '-5%', marginLeft: '52%'}}>
            Sign Up
          </Text> */}
          <Text>
            Already have an account
            <Text style={{ color: "black", fontWeight: "bold" }}>
              {" "}
              Sign In{" "}
            </Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  Signbutton: {
    height: 50,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "38%",
    marginTop: "12%",
  },
  signtext: {
    fontSize: 25,
    fontWeight: "400",
    //color: '#FF8C00',
  },
  fname: {
    marginTop: "10%",
    marginLeft: "10%",
  },
  fnametext: {
    color: "red",
    fontWeight: "bold",
  },
  lname: {
    marginTop: "3%",
    marginLeft: "10%",
  },
  textbox: {
    height: 40,
    width: "80%",
    borderWidth: 1,
    borderRadius: 50,
    marginTop: "2%",
    alignContent: "center",
    alignItems: "center",
    marginLeft: "9%",
    paddingLeft: 20,
    justifyContent: "center",
    backgroundColor: "#fbeae0",
  },
  youremail: {
    marginTop: "3%",
    marginLeft: "10%",
  },
  youremailtext: {
    color: "red",
    fontWeight: "bold",
  },
  button: {
    height: 40,
    width: "80%",
    // borderWidth: 2,
    borderRadius: 50,
    marginTop: "5%",
    alignContent: "center",
    alignItems: "center",
    marginLeft: "9%",
    justifyContent: "center",
    backgroundColor: "#FF8C00",
  },
  logbutton1: {
    fontWeight: "bold",
    color: "white",
  },
  text1: {
    marginLeft: "18%",
    marginTop: "5%",
    height: 50,
  },
});
