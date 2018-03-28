import React, { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
    }

    handleChange = (e) => {
        this.setState({search: e.target.value});
    } 

    render() {
        return (
            <nav>
                <div className='Nav_Logo'>
                    <h5>Instagram</h5>
                </div>
    
                <div className='Nav_Form'>
                    <form>
                        <input placeholder='Search' value={this.state.search} onChange={this.handleChange} />
                    </form>
                </div>
    
                <div className='Nav_Buttons'>
                    <a><p>Explore</p></a>
                    <a><p>Favorites</p></a>
                    <a><p>Profile</p></a>
                </div>
            </nav>
        )
    }


}

export default SearchBar;