import React, { Component } from 'react';
import './App.css';
import RouteHandler from'./RouteHandler';
import Header from './common/header/Header';




class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <RouteHandler className="space-header"/>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default App;
