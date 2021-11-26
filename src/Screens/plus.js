import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
class plus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: [],
      inputData: [],
    };
  }

  //function to add TextInput dynamically
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
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.addValues(text, index)}
        />
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
      <View>
        <View style={styles.row}>
          <View style={{ margin: 10 }}>
            <Button
              title="Add"
              onPress={() => this.addTextInput(this.state.textInput.length)}
            />
          </View>
          <View style={{ margin: 10 }}>
            <Button title="Remove" onPress={() => this.removeTextInput()} />
          </View>
        </View>
        {this.state.textInput.map((value) => {
          return value;
        })}
        <Button title="Get Values" onPress={() => this.getValues()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  buttonView: {
    flexDirection: "row",
  },
  textInput: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    margin: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
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
    backgroundColor: "#FDEDEC",
  },
  youremail: {
    marginTop: "3%",
    marginLeft: "10%",
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
    backgroundColor: "#FDEDEC",
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
    backgroundColor: "#FDEDEC",
  },
  date: {
    marginTop: "-18.5%",
    marginLeft: "52.8%",
  },
  datetxt: {
    color: "black",
    fontWeight: "bold",
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
    backgroundColor: "#FF8C00",
    height: 45,
    width: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginTop: "-12.5%",
    marginLeft: "75%",
  },
});

export default plus;
