import * as React from 'react';
import { StyleSheet, Image, View, Text, ScrollView, SafeAreaView} from 'react-native';
import ActivityCard from '../components/ActivityCard';
import CurrentActivityCard from '../components/CurrentActivityCard';
import ScreenTitle from '../components/ScreenTitle';

export default function ActivityScreen() {
    return (
        <ScrollView bounces={false} >
        <View style={styles.container}>
            <ScreenTitle title="Activity" subtext="Take a look at your" path={require("../assets/images/history.png")} />
                <Text style={styles.title}>Current Activity</Text>
                <CurrentActivityCard startTime='11AM' endTime='7PM' date='11/09/21' address='6979 Greenrose Dr.'/>
                <Text style={styles.title}>Past Activity</Text>
                <ActivityCard time='60' date='11/09/21' address='451 Churchill St.'/>
                <ActivityCard time='120' date='13/09/21' address='593 Erindate Rd.'/>
                <ActivityCard time='60' date='11/09/21' address='2334 Hadock St.'/>
        </View>
        </ScrollView>
      );
  }
  
  const styles = StyleSheet.create({
      container: {
          display: 'flex',
          alignItems: 'center',
      },
      title: {
          fontFamily: 'josefin',
          fontSize: 50,
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: 30,
      }
  });
  