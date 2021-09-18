import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import Toolbar from './Toolbar'

export default function ActivityCard(props) {
    return (
        <Card style={styles.card}>
            <Toolbar />
            <Paragraph style={styles.time}>You Parked {props.time} min</Paragraph>
            <Paragraph stlye={styles.date}> {props.date} </Paragraph>
            <Title style={styles.address}>at {props.address}</Title>
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
    address: {
      fontSize: 60,
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'josefin',
      marginTop: 30
    },
    time: {
      color: 'white',
      fontFamily: 'josefin'
    },
    date: {
      justifyContent: 'flex-end',
      color: 'white',
      fontFamily: 'josefin'
    }
  });
  
  