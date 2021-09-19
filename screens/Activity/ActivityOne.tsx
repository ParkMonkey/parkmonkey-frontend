import React from 'react';
import { Dimensions, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import Vew from '../../components/custom/Vew';

interface ActivityOneProps {
    navigation?: any
}

const ActivityOne: React.FC<ActivityOneProps> = ({navigation}) => {
    return (
    <>
        <ScrollView contentContainerStyle={{paddingBottom:-5000}}>
            <Vew w={Dimensions.get('window').width} flex={1} justifyContent="center" alignItems="center">
                <Image 
                    source={require('../../assets/images/Activity_1.png')}
                    style={{resizeMode: 'contain', height: 750}}
                />
            </Vew>
        </ScrollView>
    </>);
}

export default ActivityOne;