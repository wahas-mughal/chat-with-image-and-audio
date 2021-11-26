import React, { Component } from "react";
import Accordion from "react-native-collapsible/Accordion";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const SECTIONS = [
  {
    title: "what are offers?",
    content:
      "our offers are the perfect solution for regular customers its offers you a simple way to buy kilometer or ride bundles in advance, so you can save money and plan ahead for rides you take daily.",
  },
  {
    title: "how to i buy an offer",
    content:
      "go to offers from our app menu, select the offers that fit your needs, and conveniently pay for it with your credit card or roadflix credit. cash payments are not currently available.",
  },
  {
    title: "what's the difference between a kilometers and ride offers?",
    content: "Test2 Content goes here....",
  },
  {
    title: "How do I use my offers?",
    content: "Test2 Content goes here....",
  },
  {
    title: "Can i use a promo code with my offers?",
    content: "Test2 Content goes here....",
  },
  {
    title: "How can i see my offer balance?",
    content: "Test2 Content goes here....",
  },
  {
    title: "What if i have rides or ",
    content: "Test2 Content goes here....",
  },
];

export default class Help extends React.Component {
  state = {
    activeSections: [],
  };

  _renderGap = (section) => {
    return <View style={styles.gap}></View>;
  };

  _renderHeader = (section) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
        <Icon
          name="keyboard-arrow-right"
          size={20}
          color="black"
          type="MaterialIcons"
          style={styles.icon}
        />
      </View>
    );
  };

  _renderContent = (section) => {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  };

  _updateSections = (activeSections) => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <Accordion
        sections={SECTIONS}
        activeSections={this.state.activeSections}
        renderSectionTitle={this._renderSectionTitle}
        renderGap={this._renderGap}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
      />
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  container: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "300",
    marginBottom: 20,
  },
  gap: {
    margin: 20,
  },
  header: {
    backgroundColor: "#00BFFF",
    padding: 15,
    flexDirection: "row",
    paddingBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF",
  },
  headerText: {
    textAlign: "left",
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    width: "90%",
  },
  content: {
    padding: 20,
    backgroundColor: "#fff",
  },
  icon: {
    color: "gray",
    fontSize: 20,
    width: 35,
  },
  active: {
    color: "rgba(255,255,255,1)",
  },
  inactive: {
    color: "rgba(245,252,255,1)",
  },
  selectors: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  selector: {
    color: "#F5FCFF",
    padding: 10,
  },
  activeSelector: {
    fontWeight: "bold",
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: "500",
    padding: 10,
  },
  multipleToggle: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
    alignItems: "center",
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
