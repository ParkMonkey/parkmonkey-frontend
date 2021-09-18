import { PROPERTY_TYPES } from '@babel/types';
import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import Toolbar from './Toolbar';
import { StyleSheet } from 'react-native';

export default function DashboardWelcome() {
    return (
        <Card style={styles.card}>
            <Toolbar />
            <Paragraph style={styles.welcome}>Welcome Back!</Paragraph>
            <Title style={styles.title}>Joe</Title>
        </Card>

      );
  }
  
  const styles = StyleSheet.create({
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'green'
      },
      title: {
        fontSize: 60,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'josefin',
        marginTop: 30
      },
      welcome: {
          fontSize: 20,
          color: 'white',
          fontWeight: 'bold',
          fontFamily: 'josefin',
          marginTop: 50
      }
  });
  
  