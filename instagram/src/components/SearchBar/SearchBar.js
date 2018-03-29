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
                <input className='searchField' type="text" placeHolder="Search" value={this.state.searchField} onChange={this.handleChange} />
                        <ButtonGroup className="buttonGroup">
                            <ButtonToolbar>
                                <Button className="button" bsSize="large">
                                  <Glyphicon glyph="map-marker" />
                                </Button>
                                <Button className="button" bsSize="large">
                                  <Glyphicon glyph="heart" />
                                </Button>
                                <Button className="button" bsSize="large">
                                  <Glyphicon glyph="user" />
                                </Button>
                            </ButtonToolbar>
                        </ButtonGroup>
            </div>
        )
    }
}

export default SearchBar