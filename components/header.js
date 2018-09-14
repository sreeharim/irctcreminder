import React from 'react';
import { Text, View,Image } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle,imgStyle} = styles;
    return (
        <View style={viewStyle}>
            <Image style={imgStyle} source={require("../images/icon.png")}/>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20,
        color:'white',
        fontWeight: 'bold',
    },
    imgStyle:{
        marginRight: 10 ,
        width:45,
        height:45
    },
    viewStyle: {
        backgroundColor: '#1B5E20',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        height: 60,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.9,
        elevation: 9,
        position: 'relative'
    }
};
export default Header;
