import React, { Component } from 'react';
import './settings.css';

function Settings(props) {
      
    return (
      <div className = "settings">
        <div className = "settings-section">
          <label id = "break-label">Break Length</label>
          <div>
            <button  id = "break-decrement" onClick = { props.decreaseBreak}>-</button>
            <span id="break-length">{props.breakLength}</span>
            <button id = "break-increment" onClick = { props.increaseBreak}>+</button>
          </div>
        </div>
        <div className = "settings-section">
          <label id = "session-label">Session Length</label>
          <div>
            <button id = "session-decrement" onClick = { props.decreaseSession }>-</button>
            <span id="session-length">{props.sessionLength}</span>
            <button id = "session-increment" onClick = { props.increaseSession }>+</button>
          </div>
        </div>
      </div>
  )
}


export default Settings