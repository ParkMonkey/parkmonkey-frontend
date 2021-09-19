import * as React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native";
import ActivityCard from "../components/ActivityCard";
import CurrentActivityCard from "../components/CurrentActivityCard";
import Vew from "../components/custom/Vew";
import ScreenTitle from "../components/ScreenTitle";

export default function ActivityScreen() {
  return (
    <ScrollView bounces={false}>
      <View style={styles.container}>
        <ScreenTitle
          title="Activity"
          subtext="Take a look at your"
          path={require("../assets/images/history.png")}
        />
        <View style={styles.cardsContainer}>
          <Vew mt={-40}>
            <Text style={styles.title}>Current Activity</Text>
            <CurrentActivityCard
              startTime="11AM"
              endTime="7PM"
              date="11/09/21"
              address="6979 Greenrose Dr."
            />
          </Vew>
          <Vew mt={-32}>
            <Text style={styles.title}>Past Activity</Text>
            <Vew>
              <ActivityCard
                time="60"
                date="11/09/21"
                address="451 Churchill St."
                isGreen={true}
              />
            </Vew>
            <Vew mt={-32}>
              <ActivityCard
                time="120"
                date="13/09/21"
                address="593 Erindate Rd."
                isGreen={true}
              />
            </Vew>
            <Vew mt={-32}>
              <ActivityCard
                time="60"
                date="11/09/21"
                address="2334 Hadock St."
                isGreen={true}
              />
            </Vew>
          </Vew>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  cardsContainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: "josefin",
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
});
