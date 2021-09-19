import React from 'react';
import { Dimensions, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import Vew from '../../components/custom/Vew';

interface PaymentTwoProps {
    navigation?: any
}

const VerifyTwo: React.FC<PaymentTwoProps> = ({navigation}) => {
    return (
    <>
        <ScrollView contentContainerStyle={{paddingBottom:-5000}}>
            <Vew w={Dimensions.get('window').width} flex={1} justifyContent="center" alignItems="center">
                <Image 
                    source={require('../../assets/images/Verify_2.png')}
                    style={{resizeMode: 'contain', height: 600}}
                />
            </Vew>
        </ScrollView>
    </>);
}

export default VerifyTwo;