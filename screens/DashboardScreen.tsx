import * as React from "react";
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from "react-native";
import ScreenTitle from "../components/ScreenTitle";
import ActivityCard from "../components/ActivityCard";
import DashboardMessages from "../components/DashboardMessages";
import Vew from "../components/custom/Vew";
import Txt from "../components/custom/Txt";
import Colors from "../constants/Colors";
import { useAuth } from "../context/AuthContext";
import { FontAwesome } from "@expo/vector-icons";

export default function LoadingScreen(props:any) {
  const {email, loggedIn} = useAuth();
  return (
    <ScrollView bounces={false}>
      <View style={styles.container}>
          <Vew flexDir="column" bg={Colors.brand.green} w={Dimensions.get('window').width} p={16} py={8} style={{
              elevation:5, shadowOpacity:.5,
              borderBottomLeftRadius: 16, borderBottomRightRadius: 16, 
            }}>
              <Txt fontSize={25} flexWrap="wrap" color="white">Welcome back!</Txt>
              <Txt fontWeight="700" fontSize={50} flexWrap="wrap" color="white">{email}</Txt>
          </Vew>
        <View style={styles.cardContainer}>
          <Vew>
            <Text style={styles.title}>Map Search</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Map")}>
              <Vew position="relative">
                <Vew justifyContent="center" alignItems="center" height={200} mt={-32}>
                  <Image
                    style={{resizeMode: 'contain', width: Dimensions.get('window').width - 32, borderRadius: 12 }}
                    source={require("../assets/images/google_map.png")}
                  />
                </Vew>
                <Vew flexDir="row" justifyContent="flex-end" w={Dimensions.get('window').width - 32}>
                  <Vew bg={Colors.brand.green} borderRadius={12} style={{elevation: 2, transform:[{translateY: -55}]}} w={80} p={8} alignItems={'center'}>
                    <FontAwesome color="white" size={40} name={"map"} />
                  </Vew>
                </Vew>
              </Vew>
            </TouchableOpacity>
          </Vew>
          <Text style={styles.title}>Your Activity</Text>
          <ActivityCard
            date="11/09/21"
            time="60"
            address="4541 Churchill St."
            isGreen={true}
          />
          <ActivityCard
            date="13/09/21"
            time="120"
            address="593 Erindale Rd."
            isGreen={true}
          />
          <ActivityCard
            date="11/09/21"
            time="60"
            address="2334 Hadock St."
            isGreen={true}
          />
          <Text style={styles.title}>Landlording</Text>
          <Image
            style={styles.image}
            source={require("../assets/images/house_1.png")}
          />
          <RentPlate address="6979 Greenrose Dr." />
          <Text style={styles.title}>Your Messages</Text>
          <DashboardMessages
            date="10/09/21"
            message="Hello, is your driveway at 6979 Compton Dr. still available?"
          />
          <DashboardMessages
            date="12/09/21"
            message="What's up dude, can I park at 6979 Compton Dr. today?"
          />
          <DashboardMessages
            date="14/09/21"
            message="Need parking, 6979 Compton Dr. In 30 minutes? Ok????"
          />
        </View>
        <View style={styles.space}></View>
      </View>
    </ScrollView>
  );
}

interface RentPlateProps {
  address: string;
}

function RentPlate(props: RentPlateProps) {
  return (
    <View style={styles.plateContainer}>
      <Text style={styles.subText}>You're Renting</Text>
      <Text style={styles.address}>{props.address}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  cardContainer: {
    marginTop: 12,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: "josefin",
    fontSize: 35,
    marginBottom: 50,
    fontWeight: "bold",
  },
  image: {
    width: '100%',
    height: '10%',
    resizeMode: 'cover',
    position: "relative",
    overflow: "hidden",
    borderRadius: 40,
    shadowColor: "#000",
    marginBottom: -10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  subText: {
    color: "white",
    fontFamily: "josefin",
    fontSize: 20,
    marginBottom: 10,
  },
  address: {
    color: "white",
    fontFamily: "josefin",
    fontSize: 30,
  },
  plateContainer: {
    backgroundColor: "#1ECF65",
    borderRadius: 40,
    padding: 30,
    marginTop: -30,
    marginBottom: 120,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  space: {
    margin: 100,
  },
});
