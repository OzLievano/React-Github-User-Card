import React, { Component } from 'react';
import UserCard from './components/UserCard'
import Navbar from './components/NavBar'
import Followers from './components/Followers'

class App extends Component {
  constructor(){
    super();
    this.state={
      usercards:[],
      followers:[]
    }
  }

  componentDidMount(){

    Promise.all([fetch('https://api.github.com/users/OzLievano'),fetch('https://api.github.com/users/Ozlievano/followers')])
    .then(([res1,res2])=>{
      return Promise.all([res1.json(),res2.json()])
    })
    .then(([res1,res2])=>{
      this.setState({
        usercards:res1,
        followers:res2
      })
    })
    // fetch("https://api.github.com/users/OzLievano")
    // .then(res => res.json())
    // .then((json)=>{
    //   this.setState({
    //     usercards:json
    //   })
    // })
    // .catch(err=>console.log(err))

    // fetch("https://api.github.com/users/Ozlievano/followers")
    // .then(res =>res.json())
    // .then((json)=>{
    //   this.setState({
    //     followers:json
    //   })
    // })
    // .catch(err=>console.log(err))
  }
  render() { 
    return ( 
      <div>
        <Navbar/>
        <UserCard info={this.state.usercards}/>
        <Followers followers={this.state.followers}/>
      </div>
     );
  }
}
 
export default App ;