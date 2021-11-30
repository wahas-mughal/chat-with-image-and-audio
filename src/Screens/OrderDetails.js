import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";

export default class OrderDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupTrue: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ alignSelf: "center", position: "absolute", top: 50 }}>
          Chat Module with pop up
        </Text>

        {this.state.isPopupTrue ? (
          <View>
            <View style={styles.addOptions}>
              <View style={styles.popup}>
                <MaterialIcons name="gps-fixed" size={26} color="#fff" />
              </View>
              <View style={styles.popup}>
                <FontAwesome name="road" size={24} color="#fff" />
              </View>
              <View style={styles.popup}>
                <MaterialIcons name="gps-fixed" size={26} color="#fff" />
              </View>
              <View style={styles.popup}>
                <Ionicons
                  name="chatbubble-ellipses-outline"
                  size={26}
                  color="#fff"
                  onPress={() => {
                    this.setState({ isPopupTrue: false });
                    this.props.navigation.navigate("chat");
                  }}
                />
              </View>
            </View>
          </View>
        ) : (
          <View />
        )}
        <View style={styles.add}>
          <AntDesign
            name="pluscircle"
            color="#e5702a"
            size={60}
            onPress={() =>
              this.setState({ isPopupTrue: !this.state.isPopupTrue })
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  add: {
    position: "absolute",
    top: Dimensions.get("window").height / 1.33,
    right: 25,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  addOptions: {
    position: "absolute",
    top: Dimensions.get("window").height / 2.4,
    right: Dimensions.get("window").height / 100,
  },
  popup: {
    backgroundColor: "#e5702a",
    padding: 8,
    borderRadius: 50,
    marginBottom: Dimensions.get("window").height / 45,
  },
  wrapper: {
    marginBottom: Dimensions.get("window").height / 30,
  },
});
