// vamiq's custom version of React Native's <View>:
// all you need to know is that it works the same as <View>,
// though just with some extra inline styling functionality
import React from 'react';
import { ColorValue, FlexAlignType, StyleProp, View, ViewStyle } from 'react-native';

interface CustomViewProps {
    m?: number,
    ml?: number,
    mr?: number,
    mt?: number,
    mb?: number,
    my?: number,
    mx?: number,
    p?: number,
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
    pl?: number,
    pr?: number,
    pt?: number,
    pb?: number,
    py?: number,
    px?: number,
    flexDirection?: "row" | "column" | "row-reverse" | "column-reverse",
    flexDir?: "row" | "column" | "row-reverse" | "column-reverse",
    alignItems?: FlexAlignType,
    alignContent?: "flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around",
    alignSelf?: FlexAlignType | "auto",
    justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly",
    backgroundColor?: ColorValue,
    bg?: ColorValue,
    borderRadius?: number,
    zIndex?: number,
    opacity?: number,
    overflow?: "visible" | "hidden" | "scroll",
    width?: number | string,
    w?: number | string,
    height?: number | string,
    h?: number | string,
    position?: "absolute" | "relative",
    flexWrap?: "wrap" | "nowrap" | "wrap-reverse",
    flex?: number,
    display?: "none" | "flex",
    style?:StyleProp<ViewStyle>
}
const Vew: React.FC<CustomViewProps> = (
    {
        children, width, height,
        m,ml,mr,mt,mb,my,mx,pl,pr,pt,pb,
        py,px,opacity,overflow,
        zIndex,alignItems,justifyContent,p, 
        style,flexDirection, bg, flexDir, w, h,
        position, flexWrap, borderRadius,
        alignContent, alignSelf, backgroundColor, margin,
        marginBottom, marginLeft, marginRight, marginTop,
        padding, paddingBottom, paddingLeft, paddingRight,
        paddingTop, flex, display
    }
) => {

    const getStyle = () => {
        let obj = {};
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
        opacity && Object.assign(obj, {opacity});
        overflow && Object.assign(obj, {overflow});
        zIndex && Object.assign(obj, {zIndex});
        alignItems && Object.assign(obj, {alignItems});
        justifyContent && Object.assign(obj, {justifyContent});
        width && Object.assign(obj, {width});
        height && Object.assign(obj, {height});
        flexDirection && Object.assign(obj, {flexDirection});
        flexDir && Object.assign(obj, {flexDirection: flexDir});
        bg && Object.assign(obj, {backgroundColor: bg});
        w && Object.assign(obj, {width: w});
        h && Object.assign(obj, {height: h});
        position && Object.assign(obj, {position: position});
        flexWrap && Object.assign(obj, {flexWrap});
        borderRadius && Object.assign(obj, {borderRadius});
        alignContent && Object.assign(obj, {alignContent});
        alignSelf && Object.assign(obj, {alignSelf});
        backgroundColor && Object.assign(obj, {backgroundColor});
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
        flex && Object.assign(obj, {flex});
        display && Object.assign(obj, {display});

        return obj;
    }

    return (
        <View style={[getStyle(), style]}>
            {children}
        </View>
    );
}

export default Vew;