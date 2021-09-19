import React, { useState } from "react";
import { StyleSheet, Image, View, Text, ScrollView, Switch} from 'react-native';
import ScreenTitle from '../components/ScreenTitle';

export default function SettingsScreen() {
    return (
        <View>
            <View style={styles.container}>
                <ScreenTitle title="Settings" subtext="Change Permissions" path={require("../assets/images/cog.png")} />
                <Text style={styles.title}>Change Permissions</Text>
            </View>

            <View style={styles.switchList}>
                <SwitchItem label='GPS Location'/>
                <SwitchItem label='Storage'/>
                <SwitchItem label='Texting'/>
                <SwitchItem label='Calender'/>
            </View>
        </View>
      );
  }

const SwitchItem = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>{props.label}</Text>
            <Switch
                trackColor={{ false: "#1ECF65", true: "#1ECF65" }}
                thumbColor={"#CCE3D5"}
                ios_backgroundColor="#CF291E"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
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
        fontWeight: 'bold',
        marginBottom: 30,
        maxWidth: 500
    },
    switchContainer: {
        display: 'flex',
        flexDirection:'row',
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: 'white',
        padding: 15,
        width: 500,
        borderRadius: 20, 
        margin: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    switchLabel: {
        fontFamily: 'josefin',
        fontSize: 30,
        width: 200
    },
    switchList: {
        display: "flex",
        alignItems: 'center',
        backgroundColor: '#CADBE1',
        width: 600,
        alignSelf: 'center',
        borderRadius: 20,
        padding: 30
    },
});