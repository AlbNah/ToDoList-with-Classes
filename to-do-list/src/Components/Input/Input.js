
import React, { Component } from 'react'
import Wrapper from '../../UI/Wrapper/Wrapper'

class Input extends Component {
  render() {
    return (
        <Wrapper>
        <input 
        type={this.props.type}
        placeholder={this.props.placeholder}
        className={this.props.className}
        ref={this.props.myRef}
        onChange={this.props.onChange}
        />
        <br />
        </Wrapper>
      
    )
  }
}

export default Input