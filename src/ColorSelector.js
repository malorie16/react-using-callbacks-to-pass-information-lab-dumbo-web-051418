import React, { Component } from 'react';

export default class ColorSelector extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     color: (this.props.color)
  //   }
  // }
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch" style={{backgroundColor: str}} data-color={str}/>
    })
  )



  render() {
    console.log('PROPS:', this.props);
    return (
      <div id="colorSelector" onClick={this.props.changeColor}>
        {this.makeColorSwatches()}
      </div>
    )
  }

}
