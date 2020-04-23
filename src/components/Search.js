import React, { Component } from 'react';


class Search extends Component {
    
    state={
        search:""
    }

    handleInput = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        );
    };
    
    render() {
        return (
            <div>
                <input type="search" name="search" value={this.state.search} onChange={this.handleInput} />
                <button onClick={() => this.props.filterTable(this.state.search)}>search</button>
            </div>
        );
        
    }
 

}
export default Search;