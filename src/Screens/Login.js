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
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default class Login extends React.Component {
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
    };
  }

  render() {
    return (
      <ScrollView>
        <StatusBar backgroundColor="#fa602e" barStyle="light-content" />
        <TouchableOpacity style={styles.logbutton}>
          <Text style={styles.logtext}>Log In</Text>
        </TouchableOpacity>
        <View style={styles.youremail}>
          <Text style={styles.youremailtext}>YOUR E-MAIL</Text>
        </View>
        {/* <View>
          <TextInput
            style={styles.textbox}
            // placeholder="E-MAIL"
            placeholderTextColor="#FF4500"
            inlineImageLeft="username"
            inlineImagePadding={2}
          />
        </View> */}
        <View>
          <View style={styles.sectionStyle}>
            <MaterialCommunityIcons
              name="email"
              color="#e5702a"
              size={25}
              style={{ padding: 3 }}
            />

            <TextInput
              style={{ flex: 1 }}
              underlineColorAndroid="transparent"
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.password}>
          <Text style={styles.youremailtext}>PASSWORD</Text>
        </View>
        <View>
          {/* <TextInput
            style={styles.textbox}
            //  placeholder="PASSWORD"
            placeholderTextColor="#FF4500"
            secureTextEntry={true}
          /> */}
          <View style={styles.sectionStyle}>
            <MaterialCommunityIcons
              name="lock"
              color="#e5702a"
              size={25}
              style={{ padding: 3 }}
            />
            <TextInput
              style={{ flex: 1 }}
              underlineColorAndroid="transparent"
              secureTextEntry={true}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("Shipments");
          }}
        >
          <Text style={styles.logbutton1}>LOG IN</Text>
        </TouchableOpacity>
        <View style={styles.or}>
          <Text style={styles.ortext}>------------- OR -------------</Text>
        </View>
        <TouchableOpacity style={styles.facebook}>
          <Icon name="facebook" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.google}>
          <Icon name="google" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.text1}
          onPress={() => {
            this.props.navigation.navigate("Registration");
          }}
        >
          {/* <Text>Don't you have an account </Text>
          <Text
            style={{fontWeight: 'bold', marginTop: '-5%', marginLeft: '52%'}}>
            Sign Up
          </Text> */}
          <Text style={styles.swadeshitxt}>
            Don't you have an account
            <Text style={{ color: "black", fontWeight: "bold" }}> Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  logbutton: {
    height: 50,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "39%",
    marginTop: "15%",
  },
  logtext: {
    fontSize: 25,
    fontWeight: "400",
    //color: '#FF8C00',
  },
  youremail: {
    marginTop: "10%",
    marginLeft: "10%",
  },
  youremailtext: {
    color: "red",
    fontWeight: "bold",
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
    // color: "#FF8C00",
    backgroundColor: "#fbeae0",
  },
  password: {
    marginTop: "4%",
    marginLeft: "10%",
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
    backgroundColor: "#e5702a",
  },
  logbutton1: {
    fontWeight: "bold",
    color: "white",
  },
  or: {
    marginTop: "3%",
    //  marginLeft: '40%',
    alignItems: "center",
  },
  ortext: {
    color: "grey",
  },
  facebook: {
    backgroundColor: "#e5702a",
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginTop: "5%",
    marginLeft: "32%",
  },
  google: {
    backgroundColor: "#e5702a",
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginTop: "-11%",
    marginLeft: "55%",
  },
  text1: {
    marginLeft: "18%",
    marginTop: "5%",
    height: 50,
  },
  txt1: {
    fontSize: 36,
    // fontWeight: 'bold',
    textAlign: "center",
    paddingTop: 55,
  },
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fbeae0",
    borderWidth: 1,
    borderColor: "black",
    height: 40,
    borderRadius: 20,
    marginLeft: "9%",
    marginTop: "2%",
    width: "80%",
    padding: "3%",
  },
});
