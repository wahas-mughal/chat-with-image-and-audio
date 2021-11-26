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
export default class Order2 extends React.Component {
  static navigationOptions = {
    title: "Order",
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

  addTextInput = (index) => {
    let textInput = this.state.textInput;
    textInput.push(
      <View
      // style={{
      //   height: "50%",
      //   width: "80%",
      //   backgroundColor: "yellow",
      //   marginLeft: "10%",
      // }}
      >
        {/* <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.addValues(text, index)}
        /> */}
        <Card>
          <View style={styles.youremail}>
            <Text style={styles.youremailtext}>CONTACT NUMBER</Text>
          </View>
          <View style={styles.sectionStyle}>
            <MaterialCommunityIcons
              name="contacts"
              color="#e5702a"
              size={25}
              style={{ padding: 3 }}
            />
            <TextInput
              style={{ flex: 1 }}
              underlineColorAndroid="transparent"
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.youremail}>
            <Text style={styles.youremailtext}>COMPANY'S NAME</Text>
          </View>
          <View style={styles.sectionStyle}>
            <MaterialCommunityIcons
              name="office-building"
              color="#e5702a"
              size={25}
              style={{ padding: 3 }}
            />
            <TextInput
              style={{ flex: 1 }}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.youremail}>
            <Text style={styles.youremailtext}>RESPONSIBLE PERSON</Text>
          </View>
          <View style={styles.sectionStyle}>
            <MaterialCommunityIcons
              name="account"
              color="#e5702a"
              size={25}
              style={{ padding: 3 }}
            />
            <TextInput
              style={{ flex: 1 }}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.youremail}>
            <Text style={styles.youremailtext}>EMAIL</Text>
          </View>
          <View style={styles.sectionStyle}>
            <Icon
              name="at"
              size={25}
              color="#e5702a"
              size={25}
              style={{ padding: 3 }}
            />
            <TextInput
              style={{ flex: 1 }}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.youremail}>
            <Text style={styles.youremailtext}>SELECT COUNTRY</Text>
          </View>
          <View style={styles.sectionStyle1}>
            <MaterialCommunityIcons name="flag" color="#e5702a" size={25} />
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
              <Picker.Item label="" value="0" />
              <Picker.Item label="UAE" value="10" />
              <Picker.Item label="SAUDI ARABIA" value="20" />
              {/* <Picker.Item label="30" value="30" />
                <Picker.Item label="40" value="40" />
                <Picker.Item label="50" value="50" /> ABU DHABI*/}
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

          <View style={styles.youremail}>
            <Text style={styles.youremailtext}>SELECT CITY</Text>
          </View>
          <View style={styles.sectionStyle1}>
            <MaterialCommunityIcons
              name="google-maps"
              color="#e5702a"
              size={25}
            />
            <Picker
              style={styles.pickerstyles}
              selectedValue={this.state.language1}
              onValueChange={(itemValue1, itemPosition1) =>
                this.setState({
                  language1: itemValue1,
                  choosenIndex1: itemPosition1,
                })
              }
            >
              <Picker.Item label="" value="0" />
              <Picker.Item label="ABU DHABI" value="10" />
              {/* <Picker.Item label="SAUDI ARABIA" value="20" /> */}
              {/* <Picker.Item label="30" value="30" />
                <Picker.Item label="40" value="40" />
                <Picker.Item label="50" value="50" />*/}
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
          <View style={styles.youremail}>
            <Text style={styles.youremailtext}>LOCATE ON MAP</Text>
          </View>
          <View style={styles.sectionStyle}>
            <MaterialCommunityIcons
              name="map-marker-radius"
              color="#e5702a"
              size={25}
              style={{ padding: 3 }}
            />
            <TextInput
              style={{ flex: 1 }}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.youremail}>
            <Text style={styles.youremailtext}>UNLOADING TIME</Text>
          </View>
          <View style={styles.sectionStyle}>
            <MaterialCommunityIcons
              name="clock-time-nine"
              color="#e5702a"
              size={25}
              style={{ padding: 3 }}
            />
            <TextInput
              style={{ flex: 1 }}
              underlineColorAndroid="transparent"
            />
          </View>
        </Card>
      </View>
    );
    this.setState({ textInput });
  };

  //function to remove TextInput dynamically
  removeTextInput = () => {
    let textInput = this.state.textInput;
    let inputData = this.state.inputData;
    textInput.pop();
    inputData.pop();
    this.setState({ textInput, inputData });
  };

  //function to add text from TextInputs into single array
  addValues = (text, index) => {
    let dataArray = this.state.inputData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach((element) => {
        if (element.index === index) {
          element.text = text;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        inputData: dataArray,
      });
    } else {
      dataArray.push({ text: text, index: index });
      this.setState({
        inputData: dataArray,
      });
    }
  };

  //function to console the output
  getValues = () => {
    console.log("Data", this.state.inputData);
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="#e5702a" barStyle="light-content" />
        <View
          style={{
            marginTop: "5%",
            marginLeft: "30%",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "red",
              fontSize: 20,
            }}
          >
            Drop off location
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => this.removeTextInput()}
          style={{
            // backgroundColor: "black",
            width: "20%",
            marginLeft: "33%",
            marginTop: "4%",
          }}
        >
          <MaterialCommunityIcons
            name="minus-circle-outline"
            color="#e5702a"
            size={42}
          />
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: "48%",
            marginTop: "-10%",
            fontSize: 22,
            fontWeight: "500",
          }}
        >
          {/* 1 */}
          {this.state.textInput.length + 1}
        </Text>
        <TouchableOpacity
          onPress={() => this.addTextInput(this.state.textInput.length)}
          style={{
            //  backgroundColor: "black",
            width: "20%",
            marginLeft: "55%",
            marginTop: "-10%",
          }}
        >
          <MaterialCommunityIcons
            name="plus-circle-outline"
            color="#e5702a"
            size={42}
          />
        </TouchableOpacity>
        <Image source={require("../assets/head3.jpg")} style={styles.img} />
        <View
        // style={{ backgroundColor: "#FAEBD7" }}
        >
          <Card>
            <View style={styles.youremail}>
              <Text style={styles.youremailtext}>CONTACT NUMBER</Text>
            </View>
            <View style={styles.sectionStyle}>
              <MaterialCommunityIcons
                name="contacts"
                color="#e5702a"
                size={25}
                style={{ padding: 3 }}
              />
              <TextInput
                style={{ flex: 1 }}
                underlineColorAndroid="transparent"
                keyboardType="number-pad"
              />
            </View>
            <View style={styles.youremail}>
              <Text style={styles.youremailtext}>COMPANY'S NAME</Text>
            </View>
            <View style={styles.sectionStyle}>
              <MaterialCommunityIcons
                name="office-building"
                color="#e5702a"
                size={25}
                style={{ padding: 3 }}
              />
              <TextInput
                style={{ flex: 1 }}
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={styles.youremail}>
              <Text style={styles.youremailtext}>RESPONSIBLE PERSON</Text>
            </View>
            <View style={styles.sectionStyle}>
              <MaterialCommunityIcons
                name="account"
                color="#e5702a"
                size={25}
                style={{ padding: 3 }}
              />
              <TextInput
                style={{ flex: 1 }}
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={styles.youremail}>
              <Text style={styles.youremailtext}>EMAIL</Text>
            </View>
            <View style={styles.sectionStyle}>
              <Icon
                name="at"
                size={25}
                color="#e5702a"
                size={25}
                style={{ padding: 3 }}
              />
              <TextInput
                style={{ flex: 1 }}
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={styles.youremail}>
              <Text style={styles.youremailtext}>SELECT COUNTRY</Text>
            </View>
            <View style={styles.sectionStyle1}>
              <MaterialCommunityIcons name="flag" color="#e5702a" size={25} />
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
                <Picker.Item label="" value="0" />
                <Picker.Item label="UAE" value="10" />
                <Picker.Item label="SAUDI ARABIA" value="20" />
                {/* <Picker.Item label="30" value="30" />
                <Picker.Item label="40" value="40" />
                <Picker.Item label="50" value="50" /> ABU DHABI*/}
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

            <View style={styles.youremail}>
              <Text style={styles.youremailtext}>SELECT CITY</Text>
            </View>
            <View style={styles.sectionStyle1}>
              <MaterialCommunityIcons
                name="google-maps"
                color="#e5702a"
                size={25}
              />
              <Picker
                style={styles.pickerstyles}
                selectedValue={this.state.language1}
                onValueChange={(itemValue1, itemPosition1) =>
                  this.setState({
                    language1: itemValue1,
                    choosenIndex1: itemPosition1,
                  })
                }
              >
                <Picker.Item label="" value="0" />
                <Picker.Item label="ABU DHABI" value="10" />
                {/* <Picker.Item label="SAUDI ARABIA" value="20" /> */}
                {/* <Picker.Item label="30" value="30" />
                <Picker.Item label="40" value="40" />
                <Picker.Item label="50" value="50" />*/}
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
            <View style={styles.youremail}>
              <Text style={styles.youremailtext}>LOCATE ON MAP</Text>
            </View>
            <View style={styles.sectionStyle}>
              <MaterialCommunityIcons
                name="map-marker-radius"
                color="#e5702a"
                size={25}
                style={{ padding: 3 }}
              />
              <TextInput
                style={{ flex: 1 }}
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={styles.youremail}>
              <Text style={styles.youremailtext}>UNLOADING TIME</Text>
            </View>
            <View style={styles.sectionStyle}>
              <MaterialCommunityIcons
                name="clock-time-nine"
                color="#e5702a"
                size={25}
                style={{ padding: 3 }}
              />
              <TextInput
                style={{ flex: 1 }}
                underlineColorAndroid="transparent"
              />
            </View>
          </Card>
        </View>
        {this.state.textInput.map((value) => {
          return value;
        })}
        <View style={{ marginBottom: "1%" }}>
          <TouchableOpacity
            style={styles.facebook}
            onPress={() => {
              this.props.navigation.navigate("Order1");
            }}
          >
            <Icon name="arrow-left" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.google}
            onPress={() => {
              this.props.navigation.navigate("Order3");
            }}
          >
            <Icon name="arrow-right" size={25} color="white" />
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
    marginTop: "3%",
  },
  textbox: {
    height: 40,
    width: "90%",
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
    marginLeft: "1%",
  },
  youremailtext: {
    color: "black",
    fontWeight: "bold",
  },
  textbox1: {
    height: 40,
    width: "39%",
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
  textbox2: {
    height: 40,
    width: "39%",
    borderWidth: 1,
    borderRadius: 50,
    marginTop: "2%",
    alignContent: "center",
    alignItems: "center",
    marginLeft: "50%",
    paddingLeft: 20,
    justifyContent: "center",
    backgroundColor: "#fbeae0",
  },

  facebook: {
    backgroundColor: "grey",
    height: 45,
    width: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginTop: "5%",
    marginLeft: "56%",
  },
  google: {
    backgroundColor: "#e5702a",
    height: 45,
    width: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginTop: "-12.5%",
    marginLeft: "75%",
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
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fbeae0",
    borderWidth: 1,
    borderColor: "black",
    height: 40,
    borderRadius: 20,
    marginLeft: "1%",
    marginTop: "2%",
    width: "100%",
    padding: "3%",
  },
  sectionStyle1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fbeae0",
    borderWidth: 1,
    borderColor: "black",
    height: 40,
    borderRadius: 20,
    marginLeft: "1%",
    marginTop: "2%",
    width: "100%",
    // padding: "3%",
  },
});
