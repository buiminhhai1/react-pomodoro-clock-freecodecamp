import React, {Component} from 'react';

class ResetButton extends Component{
    render() {
        return (
          <div className="btn-reset" id="reset" onClick={this.props.handleClick}>
            <i className="fas fa-undo" />
          </div>
        );
    }
}
export default ResetButton;