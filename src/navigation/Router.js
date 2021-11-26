import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { drawerItemsMain } from "../components/drawerItemsMain";
import CustomDrawerContent from "../components/CustomDrawerContent";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

//Screen Declaration
import Slider from "../Screens/Slider";
import Login from "../Screens/Login";
import Order from "../Screens/Order";
import Order1 from "../Screens/Order1";
import Order2 from "../Screens/Order2";
import Order3 from "../Screens/Order3";
import OrderDetails from "../Screens/OrderDetails";
import Chat from "../Screens/Chat";
import Faq from "../Screens/Faq";
import Settings from "../Screens/Settings";
import YourRequests from "../Screens/YourRequests";
import Help from "../Screens/Help";
import Wallet from "../Screens/Wallet";
import Topup from "../Screens/Topup";
import YourOrder from "../Screens/YourOrder";
import Shipments from "../Screens/Shipments";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function ShipmentStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="shipments"
        component={Shipments}
        options={{
          headerTitleStyle: {
            color: "#fff",
          },
          headerTintColor: "#e5702a",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="orderdetails"
        component={OrderDetails}
        options={{
          headerTitleStyle: {
            color: "#fff",
          },
          headerTintColor: "#e5702a",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="chat"
        component={Chat}
        options={{
          headerTitleStyle: {
            color: "#fff",
          },
          headerTintColor: "#e5702a",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent drawerItems={drawerItemsMain} {...props} />
      )}
      screenOptions={{
        drawerStyle: {
          width: 240,
        },
      }}
    >
      {/* <Drawer.Screen
        name="Slider"
        component={Slider}
        options={{
          headerShown: false,
        }}
      /> */}
      <Drawer.Screen
        name="Slider"
        component={Slider}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#FF0000",
            width: 240,
          },
        }}
        name="YourOrder"
        component={YourOrder}
        options={{
          title: "Your Orders",
          headerStyle: {
            backgroundColor: "#e5702a",
            borderBottomLeftRadius: 125,
            height: 80,
            borderTopRightRadius: 0,
          },
          headerTitleStyle: {
            color: "#ffffff",
          },
          headerTintColor: "#ffffff",
          marginLeft: 40,
        }}
      />

      <Drawer.Screen
        name="Faq"
        component={Faq}
        options={{
          headerTitleStyle: {
            color: "#e5702a",
          },
          headerTintColor: "#e5702a",
        }}
      />
      {
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      }
      <Drawer.Screen
        name="Topup"
        component={Topup}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Help"
        component={Help}
        options={{
          headerTitleStyle: {
            color: "#e5702a",
          },
          headerTintColor: "#e5702a",
        }}
      />
      <Drawer.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerTitleStyle: {
            color: "#e5702a",
          },
          headerTintColor: "#e5702a",
        }}
      />

      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen
        name="Order"
        component={Order}
        options={{
          headerTitleStyle: {
            color: "#red",
          },
          headerTintColor: "#e5702a",
        }}
      />
      <Drawer.Screen
        name="Order1"
        component={Order1}
        options={{
          headerTitleStyle: {
            color: "#fff",
          },
          headerTintColor: "#e5702a",
        }}
      />
      <Drawer.Screen
        name="Order2"
        component={Order2}
        options={{
          headerTitleStyle: {
            color: "#fff",
          },
          headerTintColor: "#e5702a",
        }}
      />
      <Drawer.Screen
        name="Order3"
        component={Order3}
        options={{
          headerTitleStyle: {
            color: "#fff",
          },
          headerTintColor: "#e5702a",
        }}
      />
      <Drawer.Screen
        name="Shipments"
        component={ShipmentStack}
        options={{
          headerTitleStyle: {
            color: "#fff",
          },
          headerTintColor: "#e5702a",
        }}
      />
    </Drawer.Navigator>
  );
}

export default function Router() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
