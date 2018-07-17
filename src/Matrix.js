import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'
export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.changeColor = this.changeColor.bind(this)
    this.state = {
      color: ''
    }
  }

  changeColor = (event) => {
    console.log('change color func!', event.target.dataset.color );
    this.setState({
      color: event.target.dataset.color
    })
  }

  genRow = (vals) => (
    vals.map(val => <Cell color={val} selectedColor={this.state.color}/>)
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    console.log('matrix state:', this.state);
    return (
      <div id="app">
        <ColorSelector color={this.state.color} changeColor={this.changeColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
