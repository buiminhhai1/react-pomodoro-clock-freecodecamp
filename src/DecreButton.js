import React, {Component} from 'react';

class DecreButton extends Component{
    render() {
        return (
            <span
            className="btn-decre"
            id={`${this.props.countdownType}-decrement`}
            onClick={this.props.handleClick}
            >
            <i className="fas fa-arrow-down" />
            </span>
        );
    }
}
export default DecreButton;