import "./App.css"
import React, { Component } from 'react'
import classes from './UI/Global.module.css'
import Wrapper from "./UI/Wrapper/Wrapper";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {name: `Albert`, surname: `Nahapetyan`, hobby: `js`, id: 1},
        {name: `Narek`, surname: `Ghazaryan`, hobby: `FrontEnd`, id: 2},
        {name: `Hamo`, surname: `Haxverdyan`, hobby: `inch patahi`, id: 3},
      ],
      nextUserId: 4
    }
    this.nameRef = React.createRef('');
    this.surnameRef = React.createRef('');
    this.hobbyRef = React.createRef('');
  }
  render() {
    return (
        <Wrapper>
            
        </Wrapper>
    )
  }
}

export default App