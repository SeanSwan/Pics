import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import "../style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 15bb099bc828efa1e378e5f45e40a623b37621b68396d2b4b5f0c169c51f8f26",
      }
    });
  }

  render() {
    return (
      <div className="ui-container ">
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
