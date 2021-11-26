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

export default class Order extends React.Component {
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
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="#fa602e" barStyle="light-content" />

        <Image source={require("../assets/head1.jpg")} style={styles.img} />
        <TouchableOpacity
          //   style={styles.box1}
          style={[styles.box1]}
          onPress={() => {
            // this.props.navigation.navigate('Login');
          }}
        >
          <MaterialCommunityIcons name="truck-check" color="green" size={50} />
        </TouchableOpacity>
        <Text style={styles.box1txt}>lowerbed</Text>
        <TouchableOpacity style={styles.box2}>
          <MaterialCommunityIcons name="truck-check" color="green" size={50} />
        </TouchableOpacity>
        <Text style={styles.box2txt}>trilla</Text>
        <TouchableOpacity style={styles.box3}>
          <MaterialCommunityIcons name="truck-check" color="green" size={50} />
        </TouchableOpacity>
        <Text style={styles.box3txt}>new truck</Text>
        <Text style={styles.truck}>
          Truck size
          <Icon name="star" size={20} color="red" />
        </Text>
        <View>
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
              <Picker.Item label="10" value="10" />
              <Picker.Item label="20" value="20" />
              <Picker.Item label="30" value="30" />
              <Picker.Item label="40" value="40" />
              <Picker.Item label="50" value="50" />
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
        </View>
        {/* <View style={styles.pick}> */}
        {/* <MaterialCommunityIcons name="truck-check" color="green" size={10} /> */}
        {/* <Picker
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
            <Picker.Item label="10" value="10" />
            <Picker.Item label="20" value="20" />
            <Picker.Item label="30" value="30" />
            <Picker.Item label="40" value="40" />
            <Picker.Item label="50" value="50" />
            {/* {Array.isArray(this?.state?.reportOptions) &&
                  this?.state?.reportOptions?.map((reportOption, index) => (
                    <Item
                      key={index}
                      label={reportOption?.name}
                      value={reportOption?.id}
                    />
                  ))} */}
        {/* </Picker> */}
        {/* </View> */}
        <TouchableOpacity
          style={styles.button}
          delayPressIn={100}
          onPress={() => {
            this.props.navigation.navigate("Order1");
          }}
        >
          <Text style={styles.logbutton1}>NEXT</Text>
        </TouchableOpacity>
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
  box1: {
    height: 80,
    width: 80,
    backgroundColor: "#fbeae0",
    marginTop: "12%",
    marginLeft: "10%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#fbeae0",
    borderWidth: 1,
    elevation: 20,
  },
  box1txt: {
    marginLeft: "12%",
    marginTop: "1%",
  },
  box2: {
    height: 80,
    width: 80,
    backgroundColor: "#fbeae0",
    marginTop: "-28%",
    marginLeft: "40%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#fbeae0",
    borderWidth: 1,
    elevation: 20,
  },
  box2txt: {
    marginLeft: "47%",
    marginTop: "1%",
  },
  box3: {
    height: 80,
    width: 80,
    backgroundColor: "#fbeae0",
    marginTop: "-28.5%",
    marginLeft: "70%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#fbeae0",
    borderWidth: 1,
    elevation: 20,
  },
  box3txt: {
    marginLeft: "72%",
    marginTop: "1%",
  },
  truck: {
    marginLeft: "12%",
    marginTop: "60%",
    fontWeight: "400",
  },
  button: {
    height: 40,
    width: "80%",
    // borderWidth: 2,
    borderRadius: 50,
    marginTop: "8%",
    alignContent: "center",
    alignItems: "center",
    marginLeft: "9%",
    justifyContent: "center",
    backgroundColor: "#e5702a",
    marginBottom: "4%",
  },
  logbutton1: {
    fontWeight: "bold",
    color: "white",
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
