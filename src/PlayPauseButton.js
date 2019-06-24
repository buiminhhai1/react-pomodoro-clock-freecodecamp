import React,{Component} from 'react';
class PlayPauseButton extends Component{
    render() {
        return (
          <div className="btn-playpause" id="start_stop" onClick={this.props.handleClick}>
            {/* play */}
            <div className="controls__play" />
            {/* pause */}
            <div className="controls__pause" />
          </div>
        );
    }
}
export default PlayPauseButton;