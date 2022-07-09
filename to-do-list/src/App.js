import "./App.css"
import React, { Component } from 'react'
import classes from './UI/Global.module.css'
import Wrapper from "./UI/Wrapper/Wrapper";
import Card from "./UI/Card/Card";
import Text from "./Components/Text/Text"
import List from './Components/List/List'
import Listitem from "./Components/List/List"
import Button from "./Components/Button/Button"
import Input from "./Components/Input/Input"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {name: `Albert`, surname: `Nahapetyan`, hobby: `JS`, age: 16, id: 1},
        {name: `Narek`, surname: `Ghazaryan`, hobby: `Programming`, age: 32, id: 2},
        {name: `Hamo`, surname: `Haxverdyan`, hobby: `inch patahi`, age: 22, id: 3},
      ],
      nextUserId: 4,
      searchValue: ''
    }
    this.nameRef = React.createRef(''); 
    this.surnameRef = React.createRef('');
    this.hobbyRef = React.createRef('');
    this.ageRef = React.createRef('')
  }
  
  searchFunc = (event) => {
      this.setState({
        searchValue: event.target.value
      })
    }
  


  createNewUser = () => {
    if(
      this.nameRef.current.value.length > 3 &&
      this.surnameRef.current.value.length > 3 &&
      this.hobbyRef.current.value &&
      this.ageRef.current.value
      ) {
    let object = {
      name: this.nameRef.current.value,
      surname: this.surnameRef.current.value,
      hobby: this.hobbyRef.current.value,
      age: this.ageRef.current.value,
      id: this.state.nextUserId
    }
    let newUserList = this.state.users;
    newUserList.push(object)
    this.setState({
      users: newUserList,
      nextUserId: this.state.nextUserId + 1
    })
    this.ageRef.current.value = '';
    this.nameRef.current.value = '';
    this.hobbyRef.current.value = '';
    this.surnameRef.current.value = ''
  }
  }

  deleteUser = (id) => {
      const usersWithoutDeletedUser = this.state.users.filter(el => el.id !== id);
      this.setState({
        users: usersWithoutDeletedUser
      })
  }

  filterUsersBySearchName = (item) => {
    return item.name.toLocaleLowerCase().includes(this.state.searchValue.toLocaleLowerCase())
}
  
  render() {
    return (
        <Wrapper>
            <Card className={classes["main"]}>
            <Card className={classes["div-input"]}>
                  <Text>Search user</Text> <br />
                  <Input className={classes["input"]} type="text" placeholder="search" onChange={this.searchFunc} />
              </Card>
              <Card className={classes["div-input"]}>
                  <Text>user name</Text> <br />
                  <Input className={classes["input"]} type="text" placeholder="name" myRef={this.nameRef} />
              </Card>
              <Card className={classes["div-input"]}>
                  <Text>user surname</Text> <br />
                  <Input className={classes["input"]}  type="text" placeholder="surname" myRef={this.surnameRef} />
              </Card>
              <Card className={classes["div-input"]}>
                  <Text>user hobby</Text> <br />
                  <Input className={classes["input"]}  type="text" placeholder="hobby" myRef={this.hobbyRef} />
              </Card>
              <Card className={classes["div-input"]}>
                  <Text>user age</Text> <br />
                  <Input className={classes["input"]}  type="number" placeholder="age" myRef={this.ageRef} />
              </Card>
              <Button className={classes["button"]} onClick={this.createNewUser}>Create User</Button>
            </Card>
            <List>
            {this.state.users.filter(item => this.filterUsersBySearchName(item)).map(el => {
              return(
                <Listitem className={classes["list-item"]} key={el.id}>
                  <Text>{el.name}</Text>
                  <Text>{el.surname}</Text>
                  <Text>{el.hobby}</Text>
                  <Text>{el.age}</Text>
                  <Button onClick={() => this.deleteUser(el.id)} className={`${classes["button"]} ${classes["list-button"]}}`}>delete</Button>
                  </Listitem> 
              )
            })}
            </List>
           
        </Wrapper>
    )
  }
}

export default App