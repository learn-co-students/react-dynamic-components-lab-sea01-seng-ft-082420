import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let newOpacity = this.props.opacity - 0.1
    console.log(newOpacity)
    return (
      newOpacity > 0.1 ? (
      <div className="color-box" style={{opacity: this.props.opacity }}>
        <ColorBox opacity={newOpacity}/>
      </div>) : null
    )
  }

}

