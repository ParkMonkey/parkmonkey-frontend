import * as React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  ImageSourcePropType,
} from "react-native";
import ScreenTitle from "../components/ScreenTitle";

export default function MessagesMainScreen() {
  return (
    <ScrollView bounces={false}>
      <View style={styles.container}>
        <ScreenTitle
          title="Message"
          subtext="Check if you have a"
          path={require("../assets/images/forum.png")}
        />
      </View>
      <MessageCard
        address="6979 Greenrose Dr."
        lastMessage="Hey are you still interested? I can lower the price if you'd like!"
        path={require("../assets/images/house_1.png")}
      />
      <MessageCard
        address="7823 Hickory Cres."
        lastMessage="Great! I look forward to seeing you in 30 minutes!"
        path={require("../assets/images/house_2.png")}
      />
      <View style={styles.space}></View>
    </ScrollView>
  );
}

interface MessageCardProps {
  path: ImageSourcePropType;
  address: string;
  lastMessage: string;
}

function MessageCard(props: MessageCardProps) {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.image} source={props.path} />
      <View style={styles.cardText}>
        <Text style={styles.address}>{props.address}</Text>
        <Text style={styles.message}>{props.lastMessage}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontFamily: "josefin",
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 30,
  },
  cardContainer: {
    backgroundColor: "white",
    padding: 10,
    margin: 20,
    borderRadius: 15,
    display: "flex",
    alignSelf: "center",
    flexDirection: "row",
  },
  address: {
    fontFamily: "josefin",
    fontSize: 25,
    marginBottom: 20,
    marginTop: 20,
    padding: 20,
  },
  message: {
    fontFamily: "josefin",
    fontSize: 17,
    maxWidth: 250,
    padding: 20,
    paddingTop: 0,
  },
  image: {
    width: 125,
    height: 175,
    borderRadius: 20,
  },
  cardText: {
    marginLeft: 10,
  },
  space: {
    margin: 40,
  },
});
