import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isStarted: false, secsCount: 0}

  clearTimeInterval = () => clearInterval(this.timerId)

  onClickStop = () => {
    this.setState({isStarted: false})
  }

  onResetTimer = () => {
    this.setState({secsCount: 0, isStarted: false})
  }

  onClickStart = () => {
    this.setState({isStarted: true})

    this.clearTimeInterval()

    this.timerId = setInterval(this.incrementingTimeInSecs, 1000)
  }

  incrementingTimeInSecs = () => {
    const {isStarted} = this.state
    if (isStarted) {
      this.setState(previousState => ({secsCount: previousState.secsCount + 1}))
    }
  }

  gettingTimeFormat = () => {
    const {secsCount} = this.state
    const minutes = Math.floor(secsCount / 60)
    const seconds = Math.floor(secsCount % 60)
    const minutesFormat = minutes > 9 ? minutes : `0${minutes}`
    const secondsFormat = seconds > 9 ? seconds : `0${seconds}`

    return `${minutesFormat}:${secondsFormat}`
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="clock-container">
          <div className="watch-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="watch"
            />
            <h1 className="timer-heading">Timer</h1>
          </div>
          <h1 className="time">{this.gettingTimeFormat()}</h1>
          <div className="btn-container">
            <button
              type="button"
              className="btn start"
              onClick={this.onClickStart}
            >
              Start
            </button>
            <button
              type="button"
              className="btn stop"
              onClick={this.onClickStop}
            >
              Stop
            </button>
            <button
              type="button"
              className="btn reset"
              onClick={this.onResetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
