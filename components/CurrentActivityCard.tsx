import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface CurrentActivityCardProps {
  date: string;
  startTime: string;
  endTime: string;
  address: string;
}

export default function CurrentActivityCard(props: CurrentActivityCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{props.date}</Text>
      <View>
        <Text style={styles.time}>
          Parking from {props.startTime} to {props.endTime}
        </Text>
        <Text style={styles.address}>at {props.address}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1ECF65",
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
  },
});
