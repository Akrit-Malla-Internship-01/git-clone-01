import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EditDisplay extends Component {
  constructor() {
    super();
    this.state = {
      temp: {
        bio: "",
        company: "",
        location: "",
        blog: "",
        twitter_username: "",
      },
      display: false,
    };
  }
  changeHandler = (event) => {
    this.setState({
      temp: { ...this.state.temp, [event.target.id]: event.target.value },
    });
  };

  cancelHandler = () => {
    this.props.saveBtnHandler(!this.props.editButtonVisibility);
  };
  saveHandler = () => {
    const { bio, company, location, blog, twitter_username } = this.state.temp;

    fetch("https://api.github.com/user", {
      method: "PATCH",
      headers: new Headers({
        Authorization: "Bearer " + "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",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        bio,
        company,
        location,
        blog,
        twitter_username,
      }),
    }).then(() => {
      this.props.saveBtnHandler(!this.props.editButtonVisibility);
    });
  };

  render() {
    return (
      <div>
        <form>
          <br />
          <textarea
            placeholder="Add a bio"
            //   defaultValue={bio}
            id="bio"
            onChange={this.changeHandler}
          ></textarea>
          <div>
            <label htmlFor="company"></label>
            <input
              type="text"
              id="company"
              placeholder="Company"
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label htmlFor="location"></label>
            <input
              type="text"
              id="location"
              placeholder="Location"
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label htmlFor="blog"></label>
            <input
              type="text"
              id="blog"
              placeholder="Website"
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label htmlFor="twitter_username"></label>
            <input
              type="text"
              id="twitter_username"
              placeholder="Twitter username"
              onChange={this.changeHandler}
            />
          </div>
          <Link to="/" className="link-style">
            <button
              type="submit"
              onClick={this.saveHandler}
              className="sort-button"
            >
              Save
            </button>
          </Link>
          <Link to="/" className="link-style">
            <button type="submit" onClick={this.saveHandler}>
              Cancel
            </button>
          </Link>
        </form>
      </div>
    );
  }
}
