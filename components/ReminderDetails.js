import React from "react";
import { View, Text, Image, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Icon from "react-native-vector-icons/Ionicons";

const ReminderDetails = props => {
  console.log("Props in details ::"+JSON.stringify(props));
  const { displayDate, year,id,displayBookDate } = props.reminder;
  const { actionButtonIcon, dateStyle, yearStyle,bookDateStyle } = styles;
  return (
    <Card>
      <CardSection>
        <View>
          <Text style={yearStyle}>{year}</Text>
          <Text style={dateStyle}>{displayDate}</Text>
          <Text style={bookDateStyle}>Reminds on {displayBookDate}</Text>
        </View>
      </CardSection>
      <Icon name="ios-trash" style={actionButtonIcon} onPress={()=>props.deleteReminder(id)}/>
    </Card>
  );
};


const styles = {
  yearStyle: {
    fontSize: 17,
    color: "#FFF",
    fontWeight: "bold"
  },
  dateStyle: {
    fontSize: 30,
    color: "#FFF",
    fontWeight: "bold"
  },
  bookDateStyle:{
    fontSize: 15,
    color: "#FFF",
    fontWeight: "bold"
  },
  actionButtonIcon: {
    fontSize: 40,
    height: 28,
    color: "#1B5E20",
    marginRight: 10,
    marginBottom: 10,
    alignSelf: "flex-end"
  }
};

export default ReminderDetails;
