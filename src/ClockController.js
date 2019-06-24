import React, {Component} from 'react';
import PlayPauseButton from './PlayPauseButton';
import ResetButton from './ResetButton';

class ClockController extends Component { 
    render() {
        const {
          controller: { playPause, reset }
        } = this.props.clickHandlers;
        return (
          <div className="controls">
            {/* play pause */}
            <PlayPauseButton handleClick={playPause} />
            {/* reset */}
            <ResetButton handleClick={reset} />
          </div>
        );
    }
}
export default ClockController;