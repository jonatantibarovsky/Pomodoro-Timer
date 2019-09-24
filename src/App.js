import React from 'react';
import './style.css'

import Settings from './components/settings/Settings';
import Clock from './components/clock/Clock'
import Controller from './components/controller/Controller'

class App extends React.Component {

  constructor() {
    super()

    this.audioBeep = React.createRef()

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timeLabel: 'Session',
      timeLeftInSecond: 25 * 60,
      hasStarted: false,
      timerInterval: null
    }
  }

  increaseBreak = () => {
    if (this.state.breakLength < 60 && !this.state.hasStarted) {
      this.setState({
        breakLength: this.state.breakLength + 1
      })
    }
  }

  decreaseBreak = () => {
    if (this.state.breakLength > 1 && !this.state.hasStarted) {
      this.setState({
        breakLength: this.state.breakLength - 1
      })
    }
  }

  increaseSession = () => {
    if (this.state.sessionLength < 60 && !this.state.hasStarted) {
      this.setState({
        sessionLength: this.state.sessionLength + 1,
        timeLeftInSecond: (this.state.sessionLength + 1) * 60
      })
    }
  }

  decreaseSession = () => {
    if (this.state.sessionLength > 1 && !this.state.hasStarted) {
      this.setState({
        sessionLength: this.state.sessionLength - 1,
        timeLeftInSecond: (this.state.sessionLength - 1) * 60
      })
    }
  }

  reset = () => {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timeLabel: 'Session',
      timeLeftInSecond: 25 * 60,
      hasStarted: false,
      timerInterval: null
    })

    this.audioBeep.current.pause()
    this.audioBeep.current.currentTime = 0
    this.state.timerInterval && clearInterval(this.state.timerInterval)
  }

  startStop = () => {
    if (!this.state.hasStarted) {
      this.setState({
        hasStarted: !this.state.hasStarted,
        timerInterval: setInterval(() => {
          this.decreasTimer()
          this.phaseControl()
        }, 1000)
      })
    } else {
      this.audioBeep.current.pause()
      this.audioBeep.current.currentTime = 0
      this.state.timerInterval && clearInterval(this.state.timerInterval)

      this.setState({
        hasStarted: !this.state.hasStarted,
        timerInterval: null
      })
    }
  }

  decreasTimer = () => {
    this.setState({
      timeLeftInSecond: this.state.timeLeftInSecond - 1
    })
  }

  phaseControl = () => {
    if (this.state.timeLeftInSecond === 0) {
      this.audioBeep.current.play();
    } else if (this.state.timeLeftInSecond === -1) {
      if (this.state.timeLabel === 'Session') {
        this.setState({
          timeLabel: 'Break',
          timeLeftInSecond: this.state.breakLength * 60
        });
      } else {
        this.setState({
          timeLabel: 'Session',
          timeLeftInSecond: this.state.sessionLength * 60
        });
      }
    }
  }


  render() {
    return(
      <div className = 'pomodoro-container'>
        <div className = "header">
          <h1>pomodoro clock</h1>  
        </div>
        <Settings 
          breakLength = { this.state.breakLength }
          sessionLength = { this.state.sessionLength }
          hasStarted = { true }
          decreaseBreak = { this.decreaseBreak }
          decreaseSession = { this.decreaseSession}
          increaseBreak = { this.increaseBreak }
          increaseSession = { this.increaseSession }
        />

        <Clock
          timeLabel = { this.state.timeLabel }
          timeLeftInSecond = { this.state.timeLeftInSecond }
        />

        <Controller 
          reset = { this.reset }
          startStop = { this.startStop }
          hasStarted={ this.state.hasStarted }
        />

        <audio id="beep" preload="auto" src="https://goo.gl/65cBl1" ref={this.audioBeep}></audio>
      </div>
    )
  }
}

export default App;
