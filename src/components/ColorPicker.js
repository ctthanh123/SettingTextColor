import React, { Component } from 'react';

class ColorPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: [
                "red",
                "yellow",
                "blue",
                "#333"
            ]
        };
    }

    //style={ {background: "red", width: 120} }: co the style truc tiep trong the nhu the nay
    showColor(color) {
        return {
            backgroundColor: color
        };
    }

    //event click vao span nao thi span do duoc active
    // du lieu duoc truyen: 
    // ColorPicker(color dc pick) -> App(nhan color dc pick) -> ColorPicker(active span thong qua props color) 
    setActiveColor(color) {
        //truyen du lieu -> cha
        this.props.onReceiveColor(color);
    }
    
    render() {
        let elementColor = this.state.colors.map( (color, index) => {
            return <span 
                        key={index}
                        style={  this.showColor(color) }
                        className={ this.props.color === color? "active" : "" }
                        onClick={ () => this.setActiveColor(color) }
                    >
                    </span>
        } );

        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Color Picker</h3>
                  </div>
                  <div className="panel-body">
                    {elementColor}
                  </div>
              </div>
            </div>
        );
    }
}

export default ColorPicker;