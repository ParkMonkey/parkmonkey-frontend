import * as React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import ScreenTitle from '../components/ScreenTitle';

export default function ActivityScreen() {
    return (
        <ScreenTitle title="Activity" subtext="Take a look at your" path={require("../assets/images/history.png")} />
      );
  }
  
  const styles = StyleSheet.create({
  });
  