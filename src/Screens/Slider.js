import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import { SliderBox } from "react-native-image-slider-box";

export default class Slider extends Component {
  static navigationOptions = {
    title: "Slider",
    headerShown: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require("../assets/1st.jpg"),
        require("../assets/2nd.jpg"),
        require("../assets/3rd.jpg"),
      ],
    };
  }

  SearchRecords = () => {
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#fa602e" barStyle="light-content" />
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={"90%"}
          // onCurrentImagePressed={index =>
          //   console.warn(`image ${index} pressed`)
          // }
          // dotColor="#800000"
          dotColor="#fa602e"
          inactiveDotColor="black"
          autoplay
          circleLoop
        />
        <TouchableOpacity
          onPress={this.SearchRecords}
          style={{
            height: 50,
            backgroundColor: "#fa602e",
            width: "50%",
            marginTop: "7%",
            marginLeft: "25%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "1%",
            borderRadius: 26,
          }}
        >
          <Text style={{ color: "white", fontSize: 15 }}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
