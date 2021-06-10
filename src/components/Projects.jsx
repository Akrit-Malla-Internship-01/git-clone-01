import React, { Component } from "react";
import axios from "axios";

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
  }
  componentDidMount() {
    axios.get(`https://api.github.com/users/Akrit08/projects`).then((res) => {
      const projects = res.data;
      this.setState({ projects });
    });
  }
  render() {
    return (
      <div>
        <ul className="list-style">
          {this.state.projects.map((projects, i) => (
            <li key={i}>{projects.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
