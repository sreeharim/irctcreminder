import React, { Component } from "react";
import DateTimePicker from "react-native-modal-datetime-picker";
import ActionButton from "react-native-action-button";
import { View } from 'react-native';

class CustomDatePicker extends Component {
  state = {
    isDateTimePickerVisible: this.props.isVisible
  };
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this._hideDateTimePicker();
    let alarmDate = new Date(date.getTime() - (120 * 24 * 60 * 60 * 1000));
    alarmDate.setHours(8);
    alarmDate.setMinutes(0);
    alarmDate.setSeconds(0);
    console.log("Alarm Date:"+alarmDate);
    let data = {
      id:Math.floor(Math.random() * 90000) + 10000,  
      year: date.getFullYear(),
      bookDate: this.getFormatedDate(alarmDate),
      displayDate: this.getDisplayDate(date),
      displayBookDate:this.getDisplayDate(alarmDate),
      bookDateObj: alarmDate.toString()
    };
    this.props.addReminder(data);
  };
  
  getFormatedDate(date) {
    return (
      date.getDate() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getFullYear() +
      " " +
      "8" +
      ":" +
      "0" +
      ":" +
      "0"
    );
  }

  getDisplayDate(dateObj) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[dateObj.getDay()];
    let date = dateObj.getDate();
    let month = months[dateObj.getMonth()];
    return month + " " + date + ", " + day;
  }

  render() {
    return (
      
      <DateTimePicker
        mode="date"
        isVisible={this.state.isDateTimePickerVisible}
        onConfirm={this._handleDatePicked}
        onCancel={this._hideDateTimePicker}
      />
      
    );
  }
}

export default CustomDatePicker;