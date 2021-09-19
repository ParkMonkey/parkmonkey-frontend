import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface ActivityCardProps {
  isGreen: boolean;
  date: string;
  time: string;
  address: string;
}

export default function ActivityCard(props: ActivityCardProps) {
  return (
    <View
      style={[
        styles.container,
        props.isGreen ? styles.containerGreen : undefined,
      ]}
    >
      <Text style={styles.date}>{props.date}</Text>
      <View>
        <Text style={styles.time}>You Parked {props.time} min</Text>
        <Text style={styles.address}>at {props.address}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: 20,
    borderRadius: 30,
    display: "flex",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginBottom: 60,
  },
  containerGreen: {
    backgroundColor: "#1ECF65",
  },
  date: {
    alignSelf: "flex-end",
    color: "white",
    fontFamily: "josefin",
    fontSize: 15,
  },
  time: {
    color: "white",
    fontFamily: "josefin",
    fontSize: 15,
    marginBottom: 5,
  },
  address: {
    color: "white",
    fontFamily: "josefin",
    fontSize: 30,
    fontWeight: "700"
  },
});
