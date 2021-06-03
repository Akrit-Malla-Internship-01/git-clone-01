import React, { Component } from "react";
import axios from "axios";

export default class UserCount extends Component {
  constructor() {
    super();
    this.state = {
      userCount: [{ followers: "", following: "" }],
      starredNum: [{ stargazers_count: "" }],
      userName: [{ name: "", login: "" }],
    };
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/Akrit08`).then((res) => {
      this.setState({ userCount: res.data });
    });
    axios.get(`https://api.github.com/users/akrit08/starred`).then((res) => {
      this.setState({ starredNum: res.data });
    });
    axios.get(`https://api.github.com/users/akrit08`).then((res) => {
      this.setState({ userName: res.data });
    });
  }

  editProfile = () => {
    axios.patch(`https://api.github.com/user`).then((res) => {
      this.setState({ userName: res.data });
    });
  };

  handleOnEdit = () => {
    this.setState({ isEditMode: true });
  };
  render() {
    return (
      <div>
        {this.state.userName.name}
        <br />
        {this.state.userName.login}
        <br />
        <button
          className="btn-editProfile"
          onClick={() => {
            this.editProfile();
          }}
        >
          Edit Profile
        </button>
        <p className="menu-profile-text">
          <i className="fa fa-users"></i>
          {this.state.userCount.followers}&nbsp;.
          {this.state.userCount.following}&nbsp;
          <i className="fa fa-star"></i>
          {this.state.userName.public_repos}
        </p>
      </div>
    );
  }
}
