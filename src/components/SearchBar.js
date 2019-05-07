import React from "react";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-container">
        <div className="search-icon-btn">
          <label>Image Search</label>
          <br />
          <FontAwesomeIcon icon="search" />
        </div>
        <div className="search-input">
          <form onSubmit={this.onFormSubmit} className="ui-form">
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              className="search-bar"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
