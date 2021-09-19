import React, { useState } from 'react';
import Vew from '../../components/custom/Vew';
import { Dimensions, ScrollView, TextInput } from 'react-native';
import Colors from '../../constants/Colors';
import Txt from '../../components/custom/Txt';

interface SearchLocationProps {
    navigation?: any
}

const SearchLocation: React.FC<SearchLocationProps> = ({navigation}) => {

    const [search, setSearch] = useState("");

    return (
        <Vew flexDir="column">
            <Vew justifyContent="center" alignItems="center" bg={Colors.brand.green}>
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
            
        </Vew>
    );
}

export default SearchLocation;