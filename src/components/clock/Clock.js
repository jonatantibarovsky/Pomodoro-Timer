import React, { Component } from 'react'
import './clock.css'
  
class Clock extends Component {
    render() {

    const formatTime = (timeLeftInSecond) => {
        let minute = Math.floor(timeLeftInSecond / 60);
        if (minute < 10) minute = '0' + minute;
  
        let second = timeLeftInSecond - 60 * minute;
        if (second < 10) second = '0' + second;
  
        return `${minute}:${second}`;
    }
      return (
        <div className = "clock">
          <div className = "clock-content">
            <label id = "clock-label">{ this.props.timeLabel }</label>
            <span id = "clock-left">{ formatTime(this.props.timeLeftInSecond) }</span>
          </div>
        </div>
      )
    }
}

export default Clock