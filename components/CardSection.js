import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
    <View style={styles.containerStyle}>
        {props.children}
    </View>
);

const styles = {
    containerStyle: {
        backgroundColor: '#43A047',
        padding: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
        height:90,
        flex:1
    }
};

export default CardSection;
