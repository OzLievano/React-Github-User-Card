import React, { Component } from 'react';
import UserCard from './components/UserCard'
import Navbar from './components/NavBar'

class App extends Component {
  constructor(){
    super();
    this.state={
      usercards:[],
      followers:[]
    }
  }

  componentDidMount(){
    fetch("https://api.github.com/users/OzLievano")
    .then(res => res.json())
    .then((json)=>{
      this.setState({
        usercards:json
      })
    })
    .catch(err=>console.log(err))

    fetch("https://api.github.com/users/Ozlievano/followers")
    .then(res =>res.json())
    .then((json)=>{
      this.setState({
        followers:json
      })
    })
    .catch(err=>console.log(err))
  }
  render() { 
    return ( 
      <div>
        <Navbar/>
        <UserCard info={this.state.usercards} followers={this.state.followers}/>
      </div>
     );
  }
}
 
export default App ;