
import React, { Component } from 'react';
import axios from "axios"
class Champions extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
        champions:[]
        };
      }

    componentWillMount() {
        axios.get("/api/Champions").then(response => {
          this.setState({ champions: response.data });
          console.log(response);
        });
      }

      
    render() {
        console.log(this.state.champions)
        const { champions } = this.state;
        let champList = this.state.champions.map((elem, ind) => {
            return (
                <div key={elem} className="champCard">
              
              </div>
            );
          });
      return (
      
        <div className="App">
         {champList}
        </div>
      );
    }
  }
  
  export default Champions;