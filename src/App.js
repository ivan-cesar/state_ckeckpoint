
import { Component } from 'react';
import './App.css';
import UserList from './User/UserList';
import Hearder from './User/Hearder';


class App extends Component{
  render(){
    return(
      <div className='container'>
      <div className='app-wrapper'>
        <Hearder/>
        <UserList/>
        </div>
      </div>
    );
  }
}

export default App;
