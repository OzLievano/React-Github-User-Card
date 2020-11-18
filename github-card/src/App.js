import React, { Component } from 'react';
import UserCard from './components/UserCard'
import Navbar from './components/NavBar'
import Followers from './components/Followers'
import {Input} from 'reactstrap'

class App extends Component {
  constructor(){
    super();
    this.state={
      usercards:[],
      followers:[],
      username:'',
      hasError:false
    }
  }

  componentDidMount(){

    Promise.all([fetch('https://api.github.com/users/OzLievano'),fetch('https://api.github.com/users/Ozlievano/followers')])
    .then(([res1,res2])=>{
      console.log(res1,res2)
      return Promise.all([res1.json(),res2.json()])
    })
    .then(([res1,res2])=>{
      console.log(res1,res2)
      this.setState({
        usercards:res1,
        followers:res2
      })
    }) 
  }

  userNameChange = (e) => {
    this.setState({
      username:e.target.value
    })
  }

  handleUserNameChange = (e) =>{
    Promise.all([fetch(`https://api.github.com/users/${this.state.username}`),fetch(`https://api.github.com/users/${this.state.username}/followers`)])
    .then(([res1,res2])=>{
      console.log(res1,res2)
      return Promise.all([res1.json(),res2.json()])
    })
    .then(([res1,res2])=>{
      console.log(res1,res2)
      this.setState({
        usercards:res1,
        followers:res2
      })
    }) 
  }
  render() { 
    return ( 
      <div>
        <Navbar/>
        <input className="mt-5 ml-5"type="text" value={this.state.username} onChange={this.userNameChange} placeholder="enter username" />
        <button onClick={this.handleUserNameChange}>Set New User</button>
        <UserCard info={this.state.usercards} key={this.state.usercards.id}/>
        <Followers followers={this.state.followers} key={this.state.followers.id}/>
      </div>
     );
  }
}
 
export default App ;