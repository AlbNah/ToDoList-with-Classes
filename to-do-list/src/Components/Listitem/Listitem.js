import React, { Component } from 'react'

export default class Listitem extends Component {
  render() {
    return (
      <li className={this.props.className} key={this.props.key}>{this.props.children}</li>
    )
  }
}
