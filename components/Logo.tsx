import React from 'react';
import { Image } from "react-native";

interface LogoProps {
    size?: {
        width: number,
        height: number,
        fontSize: number,
    }
}

const Logo: React.FC<LogoProps> = ({
    size={
        width: 32,
        height: 32,
        fontSize: 18,
    },
}) => {
    return (
    <>
        <Image 
            source={require('../assets/images/green_logo_small.png')} 
            style={{width:size.width, height:size.height, resizeMode:'contain'}}
        />
    </>);
}

export default Logo;