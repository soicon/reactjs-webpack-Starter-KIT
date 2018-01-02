import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
        <div>
        <Header />
        <Body />
        </div>
    );
  }
}
class Header extends React.Component {
    render(){
        return (
            <div id="root">
                This is Header
            </div>
        )
    }
}

class Body extends React.Component {
    render() {
        return (
            <div>
                This is Body
            </div>
        )
    }
}
export default App;
