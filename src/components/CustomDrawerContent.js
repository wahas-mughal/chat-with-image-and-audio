import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";

import { Icon } from "react-native-elements";

function CustomDrawerContent(props) {
  function renderMainDrawer() {
    return (
      <View>
        {props.drawerItems.map((parent) => (
          <View key={parent.key}>
            <TouchableOpacity
              key={parent.key}
              testID={parent.key}
              onPress={() => props.navigation.navigate(parent.routesName)}
            >
              <View
                style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
              >
                <View style={styles.parentItem}>
                  <Icon
                    name={parent.iconName}
                    color="#999999"
                    type={parent.iconType}
                  />
                  <Text
                    style={{
                      margin: 5,
                      // fontWeight: 'bold',
                      color: "black",
                      textAlign: "center",
                      marginLeft: 15,
                    }}
                  >
                    {parent.title}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }

  return (
    <ScrollView style={styles.drawerContainer}>
      <SafeAreaView
        style={styles.container}
        forceInset={{ top: "always", horizontal: "never" }}
      >
        <View style={{ backgroundColor: "white", paddingBottom: 50 }}>
          <View
            style={{
              backgroundColor: "#e5702a",
              borderBottomLeftRadius: 80,
              borderTopEndRadius: 110,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: 75,
                  width: 150,
                  marginTop: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 0,
                  borderColor: "#C6C6C6",
                }}
              >
                <Image
                  style={{ height: 75, width: 75, borderRadius: 100 / 2 }}
                  source={require("../assets/profile_img.png")}
                />
              </View>
              <Text
                style={{
                  color: "#4d4242",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginBottom: 50,
                }}
              >
                K Rama Prudhvi
              </Text>
            </View>
          </View>
        </View>
        {renderMainDrawer()}
        {/* {mainDrawer && renderMainDrawer()} */}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    flexDirection: "row",
    paddingVertical: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 75,
  },
  drawerContainer: {
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: 0,
    padding: 8,
    color: "white",
    width: "100%",
    height: 230,
  },
  parentItem: {
    flexDirection: "row",
    alignItems: "center",
    // borderBottomWidth: 1,
    // borderBottomColor: '#F0F0F0',
    // paddingTop: 4,
    // paddingBottom: 4,
    padding: 4,
    paddingLeft: 20,
    flex: 1,
  },
  title: {
    margin: 5,
    color: "#F0F0F0",
    textAlign: "center",
    marginLeft: 15,
  },
  backButtonRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 17,
    paddingLeft: 3,
    borderBottomColor: "#F0F0F0",
    borderBottomWidth: 1,
  },
  backButtonText: {
    marginLeft: 10,
    color: "#F0F0F0",
  },
});

export default CustomDrawerContent;
