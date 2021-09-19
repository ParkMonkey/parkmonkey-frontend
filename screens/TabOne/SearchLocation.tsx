import React, { useState } from 'react';
import Vew from '../../components/custom/Vew';
import { Dimensions, ScrollView, TextInput } from 'react-native';
import Colors from '../../constants/Colors';
import Txt from '../../components/custom/Txt';
import { FontAwesome } from '@expo/vector-icons';

const locations = [
    {
        address: "4517 Gallpoint Cres.",
        postal: "Toronto, Ontario L6N 5D5"
    },
    {
        address: "1451 Blackstone Dr.",
        postal: "Toronto, Ontario L8N 5D9"
    },
    {
        address: "3920 Moonwell St.",
        postal: "Toronto, Ontario L8J 5H8"
    },
    {
        address: "2077 Greenrose Dr.",
        postal: "Toronto, Ontario L5H 1D8"
    },
    {
        address: "5891 Mac Ave.",
        postal: "Toronto, Ontario L6N 9C9"
    },
    {
        address: "2348 Red Dr.",
        postal: "Toronto, Ontario J6T 9Y8"
    },
    {
        address: "6790 Blue St.",
        postal: "Toronto, Ontario F6Y 2B4"
    },
]

interface SearchLocationProps {
    navigation?: any
}

const SearchLocation: React.FC<SearchLocationProps> = ({navigation}) => {

    const [search, setSearch] = useState("");


    return (
        <Vew flexDir="column" bg={Colors.brand.green}>
            <Vew justifyContent="center" alignItems="center">
                <TextInput 
                    style={{
                        padding: 8,
                        color: "black",
                        borderRadius: 8,
                        marginTop: 2,
                        marginBottom: 12,
                        width: Dimensions.get("window").width - 32,
                        fontSize: 22, 
                        backgroundColor: 'white',
                        shadowOpacity: 0.5,
                        elevation: 5,
                        shadowOffset: {width: 10, height: 10},
                        fontFamily: 'josefin'
                    }}
                    value={search}
                    onChangeText={setSearch}
                    placeholder="Search Address"
                    placeholderTextColor={Colors.blackAlpha[200]}
                />
            </Vew>
            <ScrollView style={{backgroundColor: "#CADBE1"}} contentContainerStyle={{paddingBottom: locations.length * 8}}>
                <Vew flex={1} style={{borderTopLeftRadius: 27, borderTopRightRadius: 27}} p={16}>
                    {
                        locations.map(({address, postal}, idx) => (
                            <Vew flexDir="row" bg="white" padding={16} borderRadius={8} key={idx} mb={8} alignItems="center">
                                <FontAwesome name="map" size={32} color="#C4C4C4" />
                                <Vew flexDir="column" ml={12}>
                                    <Txt color="black" fontSize={18} fontWeight="700">{address}</Txt>
                                    <Txt color="#C4C4C4" fontSize={14}>{postal}</Txt>
                                </Vew>
                            </Vew>
                        ))
                    }
                </Vew>
            </ScrollView>
        </Vew>
    );
}

export default SearchLocation;