import React from 'react';
import { Dimensions, Image, TouchableOpacity } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import Vew from '../../components/custom/Vew';

interface PaymentOneProps {
    navigation?: any
}

const PaymentOne: React.FC<PaymentOneProps> = ({navigation}) => {
    return (
    <>
        <ScrollView contentContainerStyle={{paddingBottom:-5000}}>
            <TouchableOpacity onPress={() => navigation.navigate("PaymentTwo")}>
                <Vew w={Dimensions.get('window').width} flex={1} justifyContent="center" alignItems="center">
                    <Image 
                        source={require('../../assets/images/Payment_1.png')}
                        style={{resizeMode: 'contain', height: 1900}}
                    />
                </Vew>
            </TouchableOpacity>
        </ScrollView>
    </>);
}

export default PaymentOne;