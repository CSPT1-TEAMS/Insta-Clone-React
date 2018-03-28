import React, { Component } from 'react';

const SearchBar = () => {
    return (
        <nav>
            <div className='Nav_Logo'>
                <h5>Instagram</h5>
            </div>

            <div className='Nav_Form'>
                <form>
                    <input placeholder='Search' />
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

export default SearchBar;