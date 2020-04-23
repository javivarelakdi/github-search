import React, { Component } from 'react';


class List extends Component {
    render() {
        return (
            <ul>
            {this.props.filteredUsers.map((user, index) => {
                return <li key={index}><a href={user.html_url}>{user.login}</a></li>
            })}
            </ul>
        );
        
    }
 

}
export default List;