import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DashboardWelcome from '../components/ScreenTitle';

export default function LoadingScreen() {
    return (
        <View style={styles.container}>
            <DashboardWelcome />
        </View>
      );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      
  });
  