
import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Home extends Component {
    render() {
      return (
      
        <div className="App">
        <Link to="/champs"> Home</Link>
        </div>
      );
    }
  }
  
  export default Home;