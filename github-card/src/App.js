import React, { Component } from 'react';
import UserCard from './components/UserCard'

class App extends Component {
  constructor(){
    super();
    this.state={
      usercards:[]
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
  }
  render() { 
    return ( 
      <div>
        <UserCard info={this.state.usercards}/>
      </div>
     );
  }
}
 
export default App ;