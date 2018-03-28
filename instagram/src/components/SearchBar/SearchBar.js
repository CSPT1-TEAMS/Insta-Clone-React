import React, { Component, } from 'react';
import { Glyphicon, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import logo from './Instagram_logo.svg.png';
import './SearchBar.css';

class SearchBar extends Component {
    constructor () {
        super ()
        this.state = {
            searchField: ''
        }
    }

    handleChange = (event) => {
        this.setState({searchField:event.target.value})
    }

    render() {
        return (
            <div className='parentDiv'>
                <img className="instaLogo"src={logo} alt="instagram"/>
                <input className='searchField' type="text" value={this.state.searchField} onChange={this.handleChange} />
                        <Button bsSize="small">
                          <Glyphicon glyph="map-marker" />
                        </Button>
                        <Button>
                          <Glyphicon glyph="heart" />
                        </Button>
                        <Button>
                          <Glyphicon glyph="user" />
                        </Button>
            </div>
        )
    }
}

export default SearchBar