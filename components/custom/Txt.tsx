// vamiq's custom version of React Native's <Text>
import React from 'react';
import { Text, ColorValue, FlexAlignType, StyleProp, TextStyle } from 'react-native';

interface CustomTextProps {
    color?: ColorValue,
    fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900", // fontWeight
    fontSize?: number // fontSize,
    m?: number,
    ml?: number,
    mr?: number,
    mt?: number,
    mb?: number,
    my?: number,
    mx?: number,
    p?: number,
    pl?: number,
    pr?: number,
    pt?: number,
    pb?: number,
    py?: number,
    px?: number,
    textAlign?: "center" | "auto" | "left" | "right" | "justify",
    opacity?: number,
    overflow?: "visible" | "hidden" | "scroll",
    zIndex?: number,
    alignItems?: FlexAlignType,
    justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly",
    flexWrap?: "wrap" | "nowrap" | "wrap-reverse",
    margin?: number,
    marginLeft?: number,
    marginBottom?: number,
    marginRight?: number,
    marginTop?: number,
    padding?: number,
    paddingLeft?: number,
    paddingRight?: number,
    paddingTop?: number,
    paddingBottom?: number,
    style?:StyleProp<TextStyle>
}
const Txt: React.FC<CustomTextProps> = (
    {
        color="whitesmoke", fontWeight, fontSize, children, 
        m,ml,mr,mt,mb,my,mx,pl,pr,pt,pb,
        py,px,textAlign,opacity,overflow,
        zIndex,alignItems,justifyContent,p, style,
        flexWrap,
        margin,
        marginBottom, marginLeft, marginRight, marginTop,
        padding, paddingBottom, paddingLeft, paddingRight,
        paddingTop
    }
) => {

    const getStyle = () => {
        let obj = {};
        color && Object.assign(obj, {color});
        fontWeight && Object.assign(obj, {fontWeight});
        fontSize && Object.assign(obj, {fontSize});
        m && Object.assign(obj, {margin: m});
        ml && Object.assign(obj, {marginLeft: ml});
        mr && Object.assign(obj, {marginRight: mr});
        mt && Object.assign(obj, {marginTop: mt});
        mb && Object.assign(obj, {marginBottom: mb});
        my && Object.assign(obj, {marginVertical: my});
        mx && Object.assign(obj, {marginHorizontal: mx});
        p && Object.assign(obj, {padding: p});
        pl && Object.assign(obj, {paddingLeft: pl});
        pr && Object.assign(obj, {paddingRight:pr});
        pt && Object.assign(obj, {paddingTop: pt});
        pb && Object.assign(obj, {paddingBottom: pb});
        py && Object.assign(obj, {paddingVertical: py});
        px && Object.assign(obj, {paddingHorizontal: px});
        textAlign && Object.assign(obj, {textAlign});
        opacity && Object.assign(obj, {opacity});
        overflow && Object.assign(obj, {overflow});
        zIndex && Object.assign(obj, {zIndex});
        alignItems && Object.assign(obj, {alignItems});
        justifyContent && Object.assign(obj, {justifyContent});
        flexWrap && Object.assign(obj, {flexWrap});
        margin && Object.assign(obj, {margin});
        marginBottom && Object.assign(obj, {marginBottom});
        marginTop && Object.assign(obj, {marginTop});
        marginLeft && Object.assign(obj, {marginLeft});
        marginRight && Object.assign(obj, {marginRight});
        padding && Object.assign(obj, {padding});
        paddingBottom && Object.assign(obj, {paddingBottom});
        paddingTop && Object.assign(obj, {paddingTop});
        paddingLeft && Object.assign(obj, {paddingLeft});
        paddingRight && Object.assign(obj, {paddingRight});

        return obj;
    }

    return (
        <Text style={[getStyle(), style]}>
            {children}
        </Text>
    );
}

export default Txt;