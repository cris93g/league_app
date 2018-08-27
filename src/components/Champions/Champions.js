import React, { Component } from "react";
import axios from "axios";
class Champions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      champions: []
    };
  }

  componentDidMount() {
    axios.get("/api/Champions").then(response => {
      this.setState({ champions: Object.values(response.data) });
    });
  }

  render() {
    console.log(this.state.champions);

    let champList = this.state.champions.map((elem, ind) => {
      return (
        <div key={elem} className="champCard">
          <p>
            name:
            {elem.name}
          </p>
          <p>{elem.blurb}</p>
          <hr />
        </div>
      );
    });
    return <div className="App">{champList}</div>;
  }
}

export default Champions;
