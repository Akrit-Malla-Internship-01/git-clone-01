import React, { Component } from "react";
import axios from "axios";
import EditDisplay from "./EditDisplay";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import UserCountIcons from "./UserCountIcons";

export default class UserCount extends Component {
  constructor() {
    super();
    this.state = {
      userName: [{ name: "", login: "" }],
    };
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/Akrit08`).then((res) => {
      this.setState({ userName: res.data });
    });
  }

  editProfile = () => {
    // axios
    //   .patch(`https://api.github.com/user`)
    //   .then((res) => this.setState({ userName: res.data }));
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
        <UserCountIcons />
        <BrowserRouter>
          <Link to="/edit-profile" className="link-style">
            <button>Edit Profile</button>
          </Link>

          <Switch>
            <Route path={"/edit-profile"} component={EditDisplay} exact />;
            <Route path={"/"} component={UserCountIcons}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
