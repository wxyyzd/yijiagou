import React, { Component } from 'react';
import Footer from "./component/footer"
import Navbar from "./component/navbar"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
    
       <section id="footer"> <Footer/></section>
       {this.props.children}
      </div>
    );
  }
}

export default App;
