import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js'
import PostContainer from './components/PostContainer/PostContainer.js'
import dummyData  from './dummy-data'

const App = () => (
      <div className="App">
        <header className="App-header">
         <SearchBar />
        </header>

        {dummyData.map((post, i) => <PostContainer key={i} postData={post} />)}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> THIS WORKS! 
        </p>
      </div> 
);

export default App;
