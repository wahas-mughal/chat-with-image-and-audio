import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default class Settings extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.titles3}>Profile</Text>
        </View>
        <View style={styles.row}>
          <Icon name="user" style={styles.icon} />
          <Text style={styles.titles}>
            NAME{"\n"}
            Test TEST
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="mobile" style={styles.icon} />
          <Text style={styles.titles}>
            Mobile Number{"\n"}
            7207255435
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="envelope" style={styles.icon} />
          <Text style={styles.titles}>
            Email{"\n"}
            testing435.test@gmail.com
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="lock" style={styles.icon} />
          <Text style={styles.titles}>Change Password</Text>
        </View>
        <View style={styles.row}>
          <Icon name="envelope" style={styles.icon} />
          <Text style={styles.titles}>
            Date of birth{"\n"}
            Not Added
          </Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.titles3}>Earn Rewards with partners</Text>
          <View style={styles.row}>
            <Icon name="envelope" style={styles.icon} />
            <Text style={styles.titles}>Loyality Partners</Text>
          </View>
        </View>
        <View style={styles.container2}>
          <Text style={styles.titles3}>General</Text>
          <View style={styles.row}>
            <Icon name="globe" style={styles.icon} />
            <Text style={styles.titles}>
              Language{"\n"}
              English
            </Text>
          </View>
          <View style={styles.row}>
            <Icon name="star" style={styles.icon} />
            <Text style={styles.titles}>Rate the app</Text>
          </View>
        </View>
        <View style={styles.container2}>
          <Text style={styles.titles3}>About</Text>
          <Text style={styles.titles4}>APP Version 1.0.0</Text>
          <Text style={styles.titles2}>Terms and conditions</Text>
          <Text style={styles.titles5}>Sign Out</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingBottom: 60,
  },
  container2: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  icon: {
    color: "gray",
    fontSize: 20,
    width: 35,
  },
  titles: {
    color: "gray",
    fontSize: 13,
    lineHeight: 22,
  },
  titles2: {
    color: "black",
    fontSize: 16,
    lineHeight: 18,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  titles3: {
    color: "red",
    fontSize: 18,
    lineHeight: 18,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  titles4: {
    color: "gray",
    fontSize: 12,
    lineHeight: 18,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  titles5: {
    color: "black",
    fontSize: 16,
    lineHeight: 18,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  contentView: {
    paddingLeft: 10,
    flex: 1,
  },
  username: {
    fontWeight: "bold",
  },
  gap: {
    lineHeight: 40,
  },
});
