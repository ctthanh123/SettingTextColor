import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import Result from './components/Result';
import SizeSetting from './components/SizeSetting';

class App extends Component {

  //tao constructor de luu tru gia tri mac dinh cua result
  //quản lý color, size của text
  constructor(props) {
    super(props);
    this.state = {
        color: "red",
        fontSize: 12
    };
  }

  //de nhan du lieu tu con -> cha phai dung 1 function
  //nhan du lieu color tu PickerColor va thay doi state cua App
  onSetColor = (params) => {
    this.setState({
      color: params
    });
  }

  //nhan du lieu thay doi size tu component SizeSetting va thay doi state cua App
  onChangeSize = (value) => {
    if(this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) {
      this.setState({
        fontSize: this.state.fontSize + value // -2 or + 2
      });
    }
  }

  //nhan du lieu reset tu component Reset va thay doi state cua App
  onSettingDefault = (value) => {
    if(value) {
      this.setState({
        color: "red",
        fontSize: 12
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container mt-50">
          <div className="row">

            <ColorPicker color={this.state.color} onReceiveColor={ this.onSetColor } />

            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <SizeSetting 
                  fontSize={ this.state.fontSize }  
                  onChangeSize={ this.onChangeSize }
                />             
            </div>

            <Reset onSettingDefault={ this.onSettingDefault } />

            <Result color={this.state.color} fontSize={this.state.fontSize} />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
