import React from 'react';
import { Dimensions, Image, TouchableOpacity } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import Vew from '../../components/custom/Vew';

interface PaymentOneProps {
    navigation?: any
}

const VerifyOne: React.FC<PaymentOneProps> = ({navigation}) => {
    return (
    <>
        <ScrollView contentContainerStyle={{paddingBottom:-5000}}>
            <TouchableOpacity onPress={() => navigation.navigate("VerifyTwo")}>
                <Vew w={Dimensions.get('window').width} flex={1} justifyContent="center" alignItems="center">
                    <Image 
                        source={require('../../assets/images/Verify_1.png')}
                        style={{resizeMode: 'contain', height: 1390}}
                    />
                </Vew>
            </TouchableOpacity>
        </ScrollView>
    </>);
}

export default VerifyOne;