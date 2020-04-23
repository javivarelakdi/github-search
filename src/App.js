import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import List from './components/List';
import Search from './components/Search';

class App extends Component {

  state = {
    users: [],
    filteredUsers:[],
    loading: true
  }

  componentDidMount() {
    axios.get("https://api.github.com/search/users?q=tom")
      .then(response => {
          this.setState({users: response.data.items, filteredUsers: response.data.items, loading: false})
      })
  }

  filterTable = (searchValue) => {
    const filteredUsers = this.state.users.filter(user => user.login.includes(searchValue));  
    this.setState({
      filteredUsers : filteredUsers
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Search filterTable={this.filterTable}/>
        {!this.state.loading && this.state.filteredUsers.length > 0 &&
          <List filteredUsers={this.state.filteredUsers}/>
        }
      </div>
    );
  }
}

export default App;
