import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import UserCountIcons from "./UserCountIcons";

export default class EditDisplay extends Component {
  render() {
    return (
      <div>
        <br />
        <textarea
          placeholder="Add a bio"
          //   defaultValue={bio}
          //   id="bio"
        ></textarea>
        <div>
          <label htmlFor="company"></label>
          <input type="text" id="company" placeholder="Company" />
        </div>
        <div>
          <label htmlFor="location"></label>
          <input type="text" id="location" placeholder="Location" />
        </div>
        <div>
          <label htmlFor="website"></label>
          <input type="text" id="website" placeholder="Website" />
        </div>
        <div>
          <label htmlFor="twitterUsername"></label>
          <input
            type="text"
            id="twitterUsername"
            placeholder="Twitter username"
          />
        </div>
        <BrowserRouter>
          <Link to="/" className="link-style">
            <button type="submit">Save</button>
          </Link>
          <Switch>
            <Route path="/" component={UserCountIcons} exact />
          </Switch>
        </BrowserRouter>
        {/* <button onClick={() => handleOnCancel()}>Cancel</button> */}
      </div>
    );
  }
}
