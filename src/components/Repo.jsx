import React, { Component } from "react";
import axios from "axios";

export default class Repo extends Component {
  constructor() {
    super();
    this.state = {
      repository: [],
    };
  }
  componentDidMount() {
    axios.get(`https://api.github.com/users/Akrit08/repos`).then((res) => {
      const repository = res.data;
      this.setState({ repository });
    });
  }
  render() {
    return (
      <ul className="list-style">
        {this.state.repository.map((repository, i) => (
          <li key={i}>{repository.name}</li>
        ))}
      </ul>
    );
  }
}
