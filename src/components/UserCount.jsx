import React, { Component } from "react";
import axios from "axios";
import EditDisplay from "./EditDisplay";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import UserCountIcons from "./UserCountIcons";
import InfoDisplay from "./InfoDisplay";
export default class UserCount extends Component {
  constructor() {
    super();
    this.state = {
      userName: [{ name: "", login: "" }],
      editButtonVisibility: true,
    };
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/Akrit08`).then((res) => {
      this.setState({ userName: res.data });
    });
  }

  editProfileClickHandler = () => {
    this.setState({ editButtonVisibility: !this.state.editButtonVisibility });
  };
  saveBtnHandler = (visibility) => {
    this.setState({ editButtonVisibility: visibility });
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

        <BrowserRouter>
          <Link to="/edit-profile" className="link-style">
            {this.state.editButtonVisibility ? (
              <div>
                <button onClick={this.editProfileClickHandler}>
                  Edit Profile
                </button>
                <UserCountIcons />
                <InfoDisplay />
              </div>
            ) : (
              ""
            )}
          </Link>

          <Switch>
            <Route
              path={"/edit-profile"}
              children={
                <EditDisplay
                  editButtonVisibility={this.state.editButtonVisibility}
                  saveBtnHandler={this.saveBtnHandler}
                ></EditDisplay>
              }
              exact
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
