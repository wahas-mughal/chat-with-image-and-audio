import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  LogBox,
  Image,
  ToastAndroid,
  Alert,
  Modal,
} from "react-native";
import {
  GiftedChat,
  Bubble,
  InputToolbar,
  Send,
  MessageImage,
} from "react-native-gifted-chat";
import { moderateScale } from "react-native-size-matters";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
  FontAwesome,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";
import Toast from "react-native-root-toast";
import { Audio } from "expo-av";
import { Asset, useAssets } from "expo-asset";
import * as FileSystem from "expo-file-system";

export class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      isFetched: false,
      isLoading: false,
      emojiSelected: false,
      messageText: "",
      image: "",
      imageBase64: "",
      defaultAnimationDialog: false,
      cloudinary_url: "",
      recordingState: false,
      recordingUri: "",
      recordingBase64: "",
      recording: undefined,
    };
    this.onSend = this.onSend.bind(this);
    this.pickImageHandler = this.pickImageHandler.bind(this);
    this.startRecording = this.startRecording.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
    this.convertUriToBase64 = this.convertUriToBase64.bind(this);
    this.openCamera = this.openCamera.bind(this);
  }

  //ask permission to pick image from gallery
  async imagePermissionHandler() {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  }

  componentDidMount() {
    this.imagePermissionHandler();
    this.dialogHandler();
  }

  //delete chat
  async deleteMessageAlert(key) {
    Alert.alert("Confirm", "Are you sure to delete this message?", [
      { text: "Yes", onPress: () => this.deleteMessage(key) },
      { text: "No" },
    ]);
  }

  async deleteMessage(key) {
    const filterMessages = this.state.messages.filter((msg) => msg.key !== key);
    this.setState({ messages: filterMessages });
    Toast.show("Deleting message...", { duration: Toast.durations.SHORT });
    const response = await fetch(
      `https://chat-module-9ae2a-default-rtdb.firebaseio.com/chat/${key}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const resData = await response.json();
    console.log("DELETED", resData);
  }

  //pick image from gallery
  async pickImageHandler() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      this.setState({ defaultAnimationDialog: false });
      this.setState({ image: result.uri });
      console.log(result);
      this.setState({ imageBase64: result.base64 });
    }
  }

  //open camera
  async openCamera() {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    this.setState({ defaultAnimationDialog: false });
    if (!result.cancelled) {
      this.setState({ image: result.uri });
      console.log(result);
      this.setState({ imageBase64: result.base64 });
    }
  }

  //render message
  renderMessageImage(props) {
    return (
      <MessageImage
        {...props}
        imageStyle={{
          width: Dimensions.get("window").width / 1.5,
          height: Dimensions.get("window").width / 2,
          resizeMode: "cover",
        }}
      />
    );
  }

  //custom message container
  actionLeft(props) {
    return (
      <>
        {this.state.recordingState ? (
          <TouchableOpacity
            onPress={this.stopRecording}
            style={{ marginLeft: 15, alignSelf: "center" }}
          >
            <FontAwesome name="microphone" size={30} color="#e5702a" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={this.startRecording}
            style={{ marginLeft: 15, alignSelf: "center" }}
          >
            <FontAwesome name="microphone" size={25} color="#888" />
          </TouchableOpacity>
        )}

        <TouchableOpacity
          onPress={() => {
            console.log("reached");
            this.setState({ defaultAnimationDialog: true });
          }}
          style={{ marginLeft: 15, alignSelf: "center" }}
        >
          <AntDesign name="camera" size={28} color="#888" />
        </TouchableOpacity>
      </>
    );
  }

  //custom inputToolBar
  customtInputToolbar(props) {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: "white",
          borderTopColor: "#E8E8E8",
          borderTopWidth: 1,
          padding: 3,
        }}
      />
    );
  }

  //custom send button
  customSendBtn({ onSend, text, sendButtonProps, ...sendProps }) {
    return (
      <Send
        {...sendProps}
        sendButtonProps={{
          ...sendButtonProps,
          onPress: () => this.customSendPress(text, onSend),
        }}
        containerStyle={{
          backgroundColor: "#e5702a",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 8,
          marginRight: 10,
          borderRadius: 100,
        }}
      >
        <MaterialCommunityIcons name="send-outline" size={28} color="#fff" />
      </Send>
    );
  }

  //render Image in Footer
  renderInFooter(props) {
    return this.state.image ? (
      <View style={{ padding: 10 }}>
        <TouchableOpacity
          onPress={() => this.setState({ image: "" })}
          style={{ position: "absolute", left: 78, top: -6, zIndex: 2 }}
        >
          <Ionicons name="close-circle" size={30} color="#e5702a" />
        </TouchableOpacity>

        <Image
          source={{ uri: this.state?.image }}
          style={{ width: 80, height: 80, borderRadius: 10 }}
        />
      </View>
    ) : this.state.recordingUri ? (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          borderWidth: 1,
          borderColor: "#e5702a",
          borderRadius: 5,
          margin: 10,
          width: Dimensions.get("window").width / 6.6,
          height: Dimensions.get("window").width / 6.6,
        }}
      >
        <TouchableOpacity
          onPress={() => this.setState({ recordingUri: "" })}
          style={{ position: "absolute", left: 48, top: -22, zIndex: 2 }}
        >
          <Ionicons name="close-circle" size={36} color="#e5702a" />
        </TouchableOpacity>
        <FontAwesome name="microphone" size={25} color="#e5702a" />
      </View>
    ) : (
      <View />
    );
  }

  //send messages
  async sendMessageHandler(text, messageId, image, audio) {
    const response = await fetch(
      "https://chat-module-9ae2a-default-rtdb.firebaseio.com/chat.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messageId,
          receiver_id: "1234567891011",
          sender_id: "1234567891012",
          message: text,
          createdAt: new Date(),
          user: {
            _id: "1234567891012",
            avatar:
              "https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png",
          },
          audio,
          image,
          sent: true,
        }),
      }
    );
    this.setState({ image: "" });
    this.setState({ recordingUri: "" });
    const resData = await response.json();
    console.log("MESSAGE SENT", resData);
  }

  //call the function after every 3 minutes
  componentDidMount() {
    this.getMessagesHandler();
  }

  //get messages
  async getMessagesHandler() {
    this.setState({ isLoading: true });
    const response = await fetch(
      "https://chat-module-9ae2a-default-rtdb.firebaseio.com/chat.json",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const resData = await response.json();

    let chatArray = [];

    for (const key in resData) {
      chatArray.push({ ...resData[key], key: key });
    }

    const modifiedMessageObj = chatArray
      ?.reverse()
      .map(
        ({ messageId, message, createdAt, user, image, sent, audio, key }) => ({
          _id: messageId,
          text: message,
          createdAt: createdAt,
          user: user,
          image,
          audio,
          sent,
          key,
        })
      );

    console.log(modifiedMessageObj);

    this.setState({ messages: modifiedMessageObj });
    this.setState({ isFetched: true });
    this.setState({ isLoading: false });
  }

  //send image to cloudinary
  async uploadImageToCloudinary(text, messageId) {
    Toast.show("Sending Photo...", { duration: Toast.durations.SHORT });

    let base64Url = `data:image/jpg;base64,${this.state.imageBase64}`;
    let apiUrl = "https://api.cloudinary.com/v1_1/dxnblz2x7/image/upload";

    let data = {
      file: base64Url,
      upload_preset: "bmo3flyd",
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();
    const image_url = resData.secure_url;

    this.sendMessageHandler(text, messageId, image_url);
  }

  //send audio to cloudinary
  async uploadAudioToCloudinary(text, messageId) {
    let base64Url = `data:audio/m4a;base64,${this.state.recordingBase64}`; //add base64
    let apiUrl = "https://api.cloudinary.com/v1_1/dxnblz2x7/upload";

    let data = {
      file: base64Url,
      upload_preset: "bmo3flyd",
      resource_type: "video",
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();
    const audio = resData.secure_url;

    this.sendMessageHandler(text, messageId, undefined, audio);
  }

  //custom send button
  //Where onSend is the function use to onsend;
  async customSendPress(text, onSend) {
    if (this.state.image && !text && onSend) {
      onSend({ text: text.trim() }, true);
    } else if (this.state.recordingUri && !text && onSend) {
      onSend({ text: text.trim() }, true);
    } else if (text && onSend) {
      onSend({ text: text.trim() }, true);
      0;
    } else {
      return false;
    }
  }

  //send message handler
  async onSend(messages = []) {
    if (this.state.image != "") {
      const text = messages[0].text;
      const messageId = messages[0]._id;

      const addImageInMessage = [
        { ...messages[0], image: this.state.image, sent: true },
      ];

      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, addImageInMessage),
      }));

      this.uploadImageToCloudinary(text, messageId);
    } else if (this.state.recordingUri != "") {
      Toast.show("Sending Audio...", { duration: Toast.durations.SHORT });

      const text = messages[0].text;
      const messageId = messages[0]._id;

      const addRecordingInMessage = [
        { ...messages[0], audio: this.state.recordingUri, sent: true },
      ];

      this.setState((previousState) => ({
        messages: GiftedChat.append(
          previousState.messages,
          addRecordingInMessage
        ),
      }));

      this.uploadAudioToCloudinary(text, messageId);
    } else {
      const text = messages[0].text;
      const messageId = messages[0]._id;

      const addExtraField = [{ ...messages[0], sent: true }];

      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, addExtraField),
      }));
      this.sendMessageHandler(text, messageId);
    }
  }

  //start recording voice
  async startRecording() {
    try {
      console.log("Requesting permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log("Starting recording..");
      this.setState({ recordingState: true });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );

      console.log("RECORDING OBJECT", recording);

      this.setState({ recording: recording });

      console.log("Recording started");
    } catch (err) {
      this.setState({ recordingState: false });
      console.error("Failed to start recording", err);
    }
  }

  //convert recording uri to base64
  async convertUriToBase64(uri) {
    // Base64 encoding for reading & writing
    const options = { encoding: FileSystem.EncodingType.Base64 };

    // Read the audio resource from it's local Uri
    const data = await FileSystem.readAsStringAsync(uri, options);

    this.setState({ recordingBase64: data });
  }

  //stop recording audio
  async stopRecording() {
    this.setState({ recordingState: false });
    this.setState({ recording: undefined });
    console.log("Stopping recording..");
    const uri = this.state.recording.getURI();
    await this.state.recording.stopAndUnloadAsync();
    this.convertUriToBase64(uri);
    this.setState({ recordingUri: uri });
    console.log("Recording stopped and stored at", uri);
  }

  //render recording
  async renderAudio(props) {
    return (
      <Bubble
        {...props}
        renderMessageAudio={() => (
          <TouchableOpacity onPress={this.playSound}>
            <FontAwesome name="microphone" size={25} color="#e5702a" />
          </TouchableOpacity>
        )}
      />
    );
  }

  //play audio
  async playSound(audio) {
    const { sound } = await Audio.Sound.createAsync({
      uri: audio,
    });
    console.log("Playing Sound");
    await sound.playAsync();
  }

  render() {
    LogBox.ignoreAllLogs();

    return (
      <View style={styles.bg}>
        <LinearGradient
          style={styles.title}
          colors={["#ed610e", "#ed610e", "#f7b58d"]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <AntDesign
              name="arrowleft"
              size={30}
              color="#fff"
              style={{ marginLeft: 10 }}
              onPress={() => {
                this.setState({ isPopupTrue: false });
                this.props.navigation.navigate("OrderDetails");
              }}
            />
            <Text
              style={{
                fontSize: RFPercentage(2.2),
                marginLeft: 10,
                color: "#fff",
              }}
            >
              Prudhvi Ram
            </Text>
          </View>
        </LinearGradient>
        {this.state.messages.length === 0 ? (
          <View style={styles.loading}>
            <Text style={{ fontSize: RFPercentage(2.1), color: "#888" }}>
              No messages
            </Text>
          </View>
        ) : (
          <View />
        )}
        <GiftedChat
          messages={this.state.messages}
          showAvatarForEveryMessage={true}
          alwaysShowSend={true}
          onInputTextChanged={(text) => console.log(text)}
          showUserAvatar={true}
          onSend={(messages) => {
            this.onSend(messages);
          }}
          user={{
            _id: "1234567891012",
            avatar:
              "https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png",
          }}
          renderBubble={(props) => {
            return (
              <Bubble
                renderMessageAudio={(props) => (
                  <View>
                    <TouchableOpacity
                      onPress={() => this.playSound(props.currentMessage.audio)}
                      style={{
                        padding: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                      }}
                    >
                      <FontAwesome name="microphone" size={25} color="#fff" />
                      <Text style={{ marginLeft: 10, color: "#fff" }}>
                        Sent a voice message.
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
                {...props}
                textStyle={{
                  right: {
                    color: "#fff",
                  },
                  left: {
                    color: "#fff",
                  },
                }}
                wrapperStyle={{
                  left: {
                    backgroundColor: "#e5702a",
                    marginBottom: 7,
                  },
                  right: {
                    backgroundColor: "#e5702a",
                    marginBottom: 7,
                  },
                }}
              >
                <View style={{ width: 80, height: 80 }}>
                  <Text style={{ color: "#000" }}> Custom View</Text>
                </View>
              </Bubble>
            );
          }}
          renderInputToolbar={(props) => this.customtInputToolbar(props)}
          renderActions={(props) => this.actionLeft(props)}
          renderSend={(props) => this.customSendBtn(props)}
          renderFooter={(props) => this.renderInFooter(props)}
          renderMessageImage={(props) => this.renderMessageImage(props)}
          renderCustomView={(props) => (
            <TouchableOpacity
              style={{ alignItems: "flex-end", margin: 10 }}
              onPress={() => this.deleteMessageAlert(props.currentMessage.key)}
            >
              <Entypo name="circle-with-cross" size={24} color="#fff" />
            </TouchableOpacity>
          )}
        />
        <Modal visible={this.state.defaultAnimationDialog} transparent={true}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.3)",
            }}
          >
            <View
              style={{
                backgroundColor: "#fff",
                width: Dimensions.get("window").width / 1.1,
                height: Dimensions.get("window").width / 2.5,
                borderRadius: 10,
                justifyContent: "center",
                padding: 20,
              }}
            >
              <TouchableOpacity
                onPress={this.openCamera}
                style={{ marginBottom: 20 }}
              >
                <Text style={styles.text}> Take Phone </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.pickImageHandler}
                style={{ marginBottom: 20 }}
              >
                <Text style={styles.text}> Choose from library </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({ defaultAnimationDialog: false })}
              >
                <Text style={styles.text}> Cancel </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 11,
    backgroundColor: "#e5702a",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    borderBottomLeftRadius: 300,
    paddingLeft: Dimensions.get("window").width / 30,
  },
  msgs: {
    color: "white",
    fontWeight: "bold",
    fontSize: RFPercentage(3),
  },
  bg: {
    flex: 1,
    backgroundColor: "white",
  },
  item: {
    marginVertical: moderateScale(7, 2),
    flexDirection: "row",
  },
  itemIn: {
    marginLeft: 20,
  },
  itemOut: {
    alignSelf: "flex-end",
    marginRight: 20,
  },
  balloon: {
    maxWidth: moderateScale(250, 2),
    paddingHorizontal: moderateScale(10, 2),
    paddingTop: moderateScale(5, 2),
    paddingBottom: moderateScale(7, 2),
    borderRadius: 8,
  },
  arrowContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    flex: 1,
  },
  arrowLeftContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  arrowRightContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  arrowLeft: {
    left: moderateScale(-6, 0.5),
  },

  arrowRight: {
    right: moderateScale(-6, 0.5),
  },
  amazon: {
    height: 200,
    width: 200,
  },
  send: {
    color: "white",
    fontSize: RFPercentage(2.5),
    // fontFamily: font.primary,
  },
  clip: {
    right: 95,
    marginTop: 5,
  },
  text: {
    // fontFamily: font.primary,
    paddingTop: 5,
    color: "white",
    fontSize: RFPercentage(2.4),
  },
  input: {
    width: Dimensions.get("window").width / 1.8,
    marginLeft: 10,
    fontSize: RFPercentage(2),
    paddingHorizontal: 8,
  },
  loading: {
    width: "100%",
    height: "40%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: RFPercentage(2),
  },
});

export default Chat;
