import React, { Component } from "react";
import { FaBookOpen } from "react-icons/fa";

export default class Body extends Component {
  render() {
    let followersNum = 5;
    let followingNum = 4;
    let starredNum = 1;
    let userFullName = "Akrit Malla";
    let userName = "Akrit08";
    return (
      <div>
        <div className="grid-container">
          <div className="item1">
            <div className="title-profile-text">
              <FaBookOpen className="icon-bookopen" />
              Overview &nbsp;
              <i className="fa fa-book"></i>
              Repositories &nbsp;
              <i className="fa fa-tasks"></i>
              Projects &nbsp;
              <i className="fa fa-cube"></i>
              Packages &nbsp;
            </div>
          </div>
          <div className="item2">
            <i className="fa fa-user-circle"></i>
            <br />
            {userFullName}
            <br />
            {userName}
            <br />
            <button>Edit Profile</button>
            <div>
              <p className="menu-profile-text">
                <i className="fa fa-users"></i>
                &nbsp;
                {followersNum} Followers . {followingNum} following .&nbsp;
                <i className="fa fa-star"></i>&nbsp;
                {starredNum}
              </p>
            </div>
          </div>

          <div className="item3">Main</div>
        </div>
      </div>
    );
  }
}
