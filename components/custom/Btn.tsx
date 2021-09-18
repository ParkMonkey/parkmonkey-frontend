import { FontAwesome } from '@expo/vector-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Txt from './Txt';
import Vew from './Vew';

interface BtnProps {
    icon?: string,
    bg?: string,
    size?: number,
    color?: string,
    text?:string,
    style?:StyleProp<ViewStyle>,
    padding?: number,
    borderRadius?: number,
}

const Btn: React.FC<BtnProps> = ({icon, bg, size, color, text, style, padding=2, borderRadius=2}) => {
    return (
    <Vew alignItems="center" bg={bg} flexDir="row" style={style} p={padding} borderRadius={borderRadius}>
        {icon && <FontAwesome  color={color} size={size} />}
        {text && <Txt color={color} mr={icon ? 8 : 0} fontSize={size} fontWeight="700">{text}</Txt>}
    </Vew>);
}

export default Btn;