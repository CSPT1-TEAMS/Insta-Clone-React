import React, { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super();

        this.state = {

        }
    }


    render() {
        return (
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/640px-Instagram_logo.svg.png" alt="logo.svg" />
                <form onSubmit={ this.handleSubmit }>
                <input type="text" placeholder="Search..." onChange={ this.handleChange } 
                        value={ this.state.newComm } />
                </form>
            </div>
        );
    
    }
}



export default SearchBar;