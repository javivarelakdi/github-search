import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    search: "",
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
  
  handleInput = (e) => {
    this.setState(
        { [e.target.name]: e.target.value }
    );
  };

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
        <div>
          <input type="search" name="search" value={this.state.search} onChange={this.handleInput} />
          <button onClick={() => this.filterTable(this.state.search)}>search</button>
        </div>
        {!this.state.loading && this.state.filteredUsers.length > 0 &&
        <ul>
          {this.state.filteredUsers.map((user, index) => {
            return <li key={index}><a href={user.html_url}>{user.login}</a></li>
          })}
        </ul>
        }
      </div>
    );
  }
}

export default App;
