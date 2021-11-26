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

export default class Order3 extends React.Component {
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
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ marginTop: "1%", fontWeight: "bold" }}>
            Load Information
          </Text>
        </View>
        <Image source={require("../assets/head4.jpg")} style={styles.img} />
        <Text style={{ marginTop: "3%", marginLeft: "5%", color: "grey" }}>
          Select type of Shipment
        </Text>

        <View style={styles.sectionStyle}>
          <MaterialCommunityIcons
            name="checkbox-multiple-blank-outline"
            color="#e5702a"
            size={25}
            style={{ padding: 3 }}
          />

          {/* <TextInput
              style={{ flex: 1 }}
              underlineColorAndroid="transparent"
            /> */}
          <Picker
            style={styles.pickerstyles}
            selectedValue={this.state.language}
            onValueChange={(itemValue, itemPosition) =>
              this.setState({
                language: itemValue,
                choosenIndex: itemPosition,
              })
            }
          >
            <Picker.Item label="Shipment Sizes" value="0" />
            {/* <Picker.Item label="10" value="10" />
            <Picker.Item label="20" value="20" />
            <Picker.Item label="30" value="30" />
            <Picker.Item label="40" value="40" />
            <Picker.Item label="50" value="50" /> */}
            {/* {Array.isArray(this?.state?.reportOptions) &&
                  this?.state?.reportOptions?.map((reportOption, index) => (
                    <Item
                      key={index}
                      label={reportOption?.name}
                      value={reportOption?.id}
                    />
                  ))} */}
          </Picker>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxtxt}>
            Please upload photos of your Shipment
          </Text>
          <Text style={{ marginLeft: "8%" }}>
            -------------------------------------------------------------
          </Text>
          <TouchableOpacity style={styles.camera}>
            <Icon name="camera" size={25} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.youremail}>
          <Text style={styles.youremailtext}>LOAD WEIGHT</Text>
        </View>
        <View style={styles.sectionStylebox1}>
          <MaterialCommunityIcons
            name="weight"
            color="#e5702a"
            size={25}
            style={{ padding: 3 }}
          />
          <TextInput style={{ flex: 1 }} underlineColorAndroid="transparent" />
        </View>
        <View style={styles.date}>
          <Text style={styles.datetxt}>PRICE OF GOODS</Text>
        </View>
        <View style={styles.sectionStylebox2}>
          <MaterialCommunityIcons
            name="cash"
            color="#e5702a"
            size={25}
            style={{ padding: 3 }}
          />
          <TextInput
            // style={styles.textbox2}
            style={{ flex: 1 }}
            //  placeholder="PHONE NUMBER"
            placeholderTextColor="#FF4500"
          />
        </View>
        <Text
          style={{
            marginLeft: "5%",
            marginTop: "2%",
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          Offer you want to apply ?
        </Text>
        <View>
          <CheckBox
            value={this.state.check}
            onChange={() => this.checkBox()}
            onCheckColor="#e5702a"
            style={{
              marginLeft: "5%",
            }}
          />
          <Text
            style={{
              marginLeft: "14.5%",
              marginTop: "-7.5%",
              fontSize: 15,
            }}
          >
            Apply Offer
          </Text>
        </View>
        <Text
          style={{
            marginLeft: "5%",
            marginTop: "2%",
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          Payment Method
        </Text>
        <TouchableOpacity
          //   style={styles.box1}
          style={[styles.box1]}
          onPress={() => {
            // this.props.navigation.navigate('Login');
          }}
        >
          <Text style={{ paddingLeft: "10%", fontSize: 18 }}>Credit</Text>
          <MaterialCommunityIcons
            name="credit-card"
            color="#e5702a"
            size={24}
            style={{
              marginLeft: "65%",
              marginTop: "-24%",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          //   style={styles.box1}
          style={[styles.box2]}
          onPress={() => {
            // this.props.navigation.navigate('Login');
          }}
        >
          <Text style={{ paddingLeft: "10%", fontSize: 18 }}>Wallet</Text>
          <MaterialCommunityIcons
            name="wallet"
            color="#e5702a"
            size={24}
            style={{
              marginLeft: "65%",
              marginTop: "-24%",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          //   style={styles.box1}
          style={[styles.box3]}
          onPress={() => {
            // this.props.navigation.navigate('Login');
          }}
        >
          <Text style={{ paddingLeft: "10%", fontSize: 18 }}>Cash</Text>
          <MaterialCommunityIcons
            name="cash"
            color="#e5702a"
            size={28}
            style={{
              marginLeft: "65%",
              marginTop: "-26%",
            }}
          />
        </TouchableOpacity>
        <View style={styles.bigbox}>
          <View
            style={{
              backgroundColor: "#bcbcbc",
              height: 60,
              width: "100%",
              marginTop: "-0.1%",
              borderTopEndRadius: 21,
              borderTopLeftRadius: 21,
            }}
          >
            <Text
              style={{
                marginTop: "3%",
                fontWeight: "bold",
                marginLeft: "4%",
              }}
            >
              PAYMENT METHOD
            </Text>
            <Text
              style={{
                marginTop: "1%",
                marginLeft: "4%",
                fontSize: 16,
              }}
            >
              You choice
              <Text
                style={{ color: "#e5702a", fontWeight: "bold", fontSize: 16 }}
              >
                {" "}
                Cash{" "}
              </Text>
              as payment method
            </Text>
          </View>
          <View style={{ marginTop: "2%", marginLeft: "4%" }}>
            <Text style={{ color: "#6e6e6e", fontSize: 16 }}>PRICE :</Text>
            <Text
              style={{
                color: "#26a32b",
                marginTop: "-6.5%",
                marginLeft: "85%",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              20
            </Text>
          </View>
          <Text style={{ marginTop: "-2%" }}>
            --------------------------------------------------------------------------------
          </Text>
          <View style={{ marginTop: "2%", marginLeft: "4%" }}>
            <Text style={{ color: "#6e6e6e", fontSize: 16 }}>INSURANCE :</Text>
            <Text
              style={{
                color: "#26a32b",
                marginTop: "-6.5%",
                marginLeft: "85%",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              0
            </Text>
          </View>
          <Text style={{ marginTop: "-2%" }}>
            --------------------------------------------------------------------------------
          </Text>
          <View style={{ marginTop: "2%", marginLeft: "4%" }}>
            <Text style={{ color: "#6e6e6e", fontSize: 16 }}>VAT :</Text>
            <Text
              style={{
                color: "#26a32b",
                marginTop: "-6.5%",
                marginLeft: "85%",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              2
            </Text>
          </View>
          <Text style={{ marginTop: "-2%" }}>
            --------------------------------------------------------------------------------
          </Text>
          <View style={{ marginTop: "2%", marginLeft: "4%" }}>
            <Text
              style={{ color: "#262626", fontSize: 16, fontWeight: "bold" }}
            >
              TOTAL PRICE(SAR) :
            </Text>
            <Text style={{ color: "#6e6e6e", fontSize: 13, paddingLeft: "6%" }}>
              with including charges
            </Text>
            <Text
              style={{
                color: "black",
                marginTop: "-6.5%",
                marginLeft: "85%",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              22
            </Text>
          </View>
          <TouchableOpacity
            style={{
              height: 50,
              width: "80%",
              backgroundColor: "#e5702a",
              borderRadius: 30,
              marginLeft: "10%",
              marginTop: "4%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", color: "white" }}>COMPLETE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  img: {
    width: "100%",
    height: 45,
    marginTop: "4%",
  },
  pickerstyles: {
    height: 40,
    width: "80%",
    color: "#000",
    justifyContent: "center",
  },
  pick: {
    backgroundColor: "#fbeae0",
    width: "80%",
    marginTop: "2%",
    marginLeft: "9%",
    borderRadius: 50,
    alignItems: "center",
    borderWidth: 1,
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
  boxtxt: {
    color: "#e66f2b",
    marginLeft: "8%",
    marginTop: "5%",
  },
  camera: {
    height: 50,
    backgroundColor: "#e5702a",
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "8%",
    marginTop: "3%",
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
    marginLeft: "5%",
    marginTop: "2%",
    width: "90%",
    //  padding: "3%",
  },
  youremail: {
    marginTop: "3%",
    marginLeft: "5%",
  },
  youremailtext: {
    color: "black",
    fontWeight: "bold",
  },

  date: {
    marginTop: "-18.5%",
    marginLeft: "52.8%",
  },
  datetxt: {
    color: "black",
    fontWeight: "bold",
  },
  box1: {
    height: 50,
    width: 90,
    backgroundColor: "#fbeae0",
    marginTop: "2%",
    marginLeft: "9%",
    borderRadius: 10,
    justifyContent: "center",
    borderColor: "#fbeae0",
    borderWidth: 1,
    elevation: 10,
    marginBottom: "1%",
  },
  box2: {
    height: 50,
    width: 90,
    backgroundColor: "#fbeae0",
    marginTop: "-15%",
    marginLeft: "40%",
    borderRadius: 10,
    justifyContent: "center",
    borderColor: "#fbeae0",
    borderWidth: 1,
    elevation: 10,
    marginBottom: "1%",
  },
  box3: {
    height: 50,
    width: 90,
    backgroundColor: "#fbeae0",
    marginTop: "-15%",
    marginLeft: "70%",
    borderRadius: 10,
    justifyContent: "center",
    borderColor: "#fbeae0",
    borderWidth: 1,
    elevation: 10,
    marginBottom: "1%",
  },

  sectionStylebox1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fbeae0",
    borderWidth: 1,
    borderColor: "black",
    height: 40,
    borderRadius: 20,
    marginLeft: "5%",
    marginTop: "1%",
    width: "43%",
    padding: "3%",
  },
  sectionStylebox2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fbeae0",
    borderWidth: 1,
    borderColor: "black",
    height: 40,
    borderRadius: 20,
    marginLeft: "52%",
    marginTop: "2%",
    width: "43%",
    padding: "3%",
  },
  bigbox: {
    height: 320,
    width: "90%",
    marginLeft: "5%",
    marginTop: "2%",
    backgroundColor: "white",
    marginBottom: "2%",
    borderRadius: 21,
    borderColor: "#262626",
    borderWidth: 2,
  },
});
