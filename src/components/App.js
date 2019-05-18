import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import "../style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ImageList from "./ImageList";

library.add(faSearch);

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get(
      "https://api.unsplash.com/search/photos/?client_id=15bb099bc828efa1e378e5f45e40a623b37621b68396d2b4b5f0c169c51f8f26",
      {
        params: { query: term }
      }
    );
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui-container ">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
