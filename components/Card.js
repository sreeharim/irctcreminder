import React from "react";
import { View } from "react-native";

const Card = props => (
  <View style={styles.containerStyle}>{props.children}</View>
);

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 9,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    justifyContent: "flex-end",
    flexDirection: "row",
    backgroundColor: '#43A047'
  }
};

export default Card;
