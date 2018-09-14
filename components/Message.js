import React from "react";
import { Text,View } from "react-native";
const Message = ({ children }) => {
  const { textStyle,viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{children}</Text>
    </View>
  );
};
styles = {
  textStyle: {
    fontSize:18
  },
  viewStyle:{
      flex: 1,
      alignItems: 'center',
  }
};

export default Message;
