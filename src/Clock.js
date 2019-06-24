import React, {Component} from 'react';

class Clock extends Component{
    render() {
        const {
          currentTimerLabel,
          currentTime: { minute, second }
        } = this.props.state;
        return (
          <div className="clock-block">
            {/* real */}
            <div className="clock ">
              <h3 className="clock-brand">
                <a href="https://codepen.io/minh-hi-the-styleful/" target="_blank">Minh Hải</a>
              </h3>
              <div className="time-countdown">
                {/* header */}
                <header className="time-countdown__header">
                  <h3 className="time-countdown__title" id="timer-label">
                    {currentTimerLabel.toUpperCase()}
                  </h3>
                </header>
                {/* display */}
                <div className="time-countdown__display" id="time-left">
                  {minute}:{second}
                </div>
              </div>
            </div>
            {/* mirror */}
            <div className="clock mirror" />
          </div>
        );
    }
}
export default Clock;