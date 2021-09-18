import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface IndexProps {
  navigation?: any
}

const Index: React.FC<IndexProps> = ({navigation}) => {
    return (
    <>
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("")}>
                <Text style={styles.title}>Placeholder for Map Search (press me)</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
        </View>
    </>);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
});

export default Index;