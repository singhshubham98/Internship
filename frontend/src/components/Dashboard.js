import React, { Component } from "react";
import "../style/dashboard.css";
import Navigation from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <div className="row searchDiv">
          <div className="col-md-8 offset-md-3">
            <div className="search-form">
              <form>
                <FontAwesomeIcon icon={faSearch} className="formSearchIcon" />
                <input
                  type="search"
                  placeholder="Search..."
                  autoComplete="off"
                  className="searchBar"
                />
                <p
                  style={{
                    textAlign: "left",
                    marginLeft: "10px",
                    marginBottom: "10px",
                    color: "rgb(110,110,110)"
                  }}
                >
                  Enter keywords like: skills, Name, Category to search
                  developers{" "}
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="container">
          <Card />
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
