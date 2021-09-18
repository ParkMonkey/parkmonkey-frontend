import { PROPERTY_TYPES } from '@babel/types';
import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import Toolbar from './Toolbar'

export default function DashboardWelcome(props) {
    return (
        <Card style={styles.card}>
            <Toolbar />
            <Paragraph style={styles.welcome}>Welcome Back!</Paragraph>
            <Title style={styles.title}>{props.name}</Title>
        </Card>

      );
  }
  
  const styles = StyleSheet.create({
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        background: 'green'
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
  
  