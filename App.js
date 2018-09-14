import React, { Component } from "react";
import { StyleSheet, View, AsyncStorage } from "react-native";
import ReactNativeAN from "react-native-alarm-notification";
import ActionButton from "react-native-action-button";
import Header from "./components/header";
import ReminderList from "./components/ReminderList";
import CustomDatePicker from "./components/CustomDatePicker";
import Message from "./components/Message";

let alarmNotifData = require("./templates/notification.json");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }
  componentDidMount() {
    this._retrieveData();
  }
  state = {
    reminders: []
  };
  _showDateTimePicker = () => this.child.current._showDateTimePicker();

  _clearPreviousDates = reminders => {
    return reminders.filter(reminder => {
      const currDate = new Date();
      const reminderDate = new Date(reminder.bookDateObj);
      return reminderDate >= currDate;
    });
  };
  _storeData = () => {
    try {
      let _self = this;
      AsyncStorage.removeItem("reminders", () => {
        AsyncStorage.setItem(
          "reminders",
          JSON.stringify(_self.state.reminders)
        );
      });
      console.log("Stored value");
    } catch (error) {
      cosole.log("Error saving data:" + error);
    }
  };
  _retrieveData = async () => {
    try {
      const reminderString = await AsyncStorage.getItem("reminders");
      if (reminderString !== null) {
        console.log("Got data " + reminderString);
        const oldReminders = JSON.parse(reminderString);
        const reminders = this._clearPreviousDates(oldReminders);
        this.setState({ reminders });
        this._storeData();
      }
    } catch (error) {
      console.log("Error getting date ::" + error);
    }
  };
  setAlarm(data) {
    let newObj = { fire_date: data.bookDate, id: "" + data.id , message :" Book ticket for "+data.displayDate};
    let idObj = { id: "" + data.id };
    let alarmNotifData1 = { ...alarmNotifData, ...newObj };
    ReactNativeAN.scheduleAlarm(alarmNotifData1);
  }
  addReminder(data) {
    console.log("Add called withd id ::" + data.id);
    let { reminders } = this.state;
    reminders.push(data);
    this.setState({ reminders });
    this._storeData();
    this.setAlarm(data);
  }
  deleteReminder(id) {
    console.log("Delete called withd id ::" + id);
    let { reminders } = this.state;
    let newReminders = reminders.filter(reminder => reminder.id != id);
    this.setState({ reminders: newReminders });
    ReactNativeAN.deleteAlarm("" + id);
    this._storeData();
  }
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="IRCTC Reminder" />
        
        <ReminderList
          reminders={this.state.reminders}
          deleteReminder={this.deleteReminder.bind(this)}
        />
        <CustomDatePicker
          ref={this.child}
          addReminder={this.addReminder.bind(this)}
        />
       
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => this._showDateTimePicker()}
        />
         {this.state.reminders.length == 0 && <Message>Tap + button to add reminder</Message>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
  }
});
