import React from 'react';
import { Dimensions, Image, TouchableOpacity } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import Vew from '../../components/custom/Vew';

interface ViewingBeforePurchaseProps {
    navigation?: any
}

const ViewingBeforePurchase: React.FC<ViewingBeforePurchaseProps> = ({navigation}) => {
    return (
        <ScrollView contentContainerStyle={{paddingBottom:-5000}}>
            <TouchableOpacity onPress={() => navigation.navigation("Payment_1")}>
                
            </TouchableOpacity>
            <Vew w={Dimensions.get('window').width} flex={1} justifyContent="center" alignItems="center">
                <Image 
                    source={require('../../assets/images/banana_1_option.png')}
                    style={{resizeMode: 'contain', height: 2000}}
                />
            </Vew>
        </ScrollView>
    );
}

export default ViewingBeforePurchase;