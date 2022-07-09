import React, { Component } from 'react'

export default class Text extends Component {
  render() {
    return (
      <span className={this.props.className}> {this.props.children} </span>
    )
  }
}
