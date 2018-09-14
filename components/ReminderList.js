import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import ReminderDetails from "./ReminderDetails";

class ReminderList extends Component {
  state = {
    reminders: []
  };

  renderReminderDetails() {
    console.log("Props::"+JSON.stringify(this.props))
    return this.props.reminders.map(reminder => (
      <ReminderDetails key={reminder.id} reminder={reminder} deleteReminder={this.props.deleteReminder}/>
    ));
  }
  render() {
    console.log(this.state);

    return <ScrollView>{this.renderReminderDetails()}</ScrollView>;
  }
}

export default ReminderList;
