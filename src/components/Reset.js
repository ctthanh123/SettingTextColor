import React, { Component } from 'react';

class Reset extends Component {
    //truyen du lieu tu reset -> app
    onReset = () => {
        this.props.onSettingDefault(true);
    }

    render() {
        return(
            <div className="Reset col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button"
                    className="btn btn-success"
                    onClick={ this.onReset }  
              >
                  Reset
              </button>
            </div>
        );
    }
}

export default Reset;