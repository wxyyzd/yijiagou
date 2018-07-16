import React, { Component } from 'react';
import Footer from "./component/footer"
import Search from "./component/search"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search/>

       <section id="footer"> <Footer/></section>
      </div>
    );
  }
}

export default App;
