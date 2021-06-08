import React, { Component } from "react";
import axios from "axios";
export default class InfoDisplay extends Component {
  constructor() {
    super();
    this.state = {
      info: {
        bio: "",
        company: "",
        location: "",
        website: "",
        twitterUsername: "",
      },
    };
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/user", {
        headers: {
          Authorization: "Bearer " + "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",
        },
      })
      .then((res) => {
        this.setState({ info: res.data });
      });
  }
  render() {
    return (
      <div className="info-display">
        <p>{this.state.info.bio}</p>
        <p>{this.state.info.company}</p>
        <p>{this.state.info.location}</p>
        <p>{this.state.info.blog}</p>
        <p>{this.state.info.twitter_username}</p>
      </div>
    );
  }
}
