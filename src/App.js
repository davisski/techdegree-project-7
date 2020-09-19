import React, { Component } from "react";
import axios from "axios";
import { apiKey } from "./config";

class App extends Component {
  state = {
    photos: [],
  };
  componentDidMount() {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&media=photos&per_page=24&format=json&nojsoncallback=1`
      )
      .then(({ data }) => this.setState({ photos: data.photos.photo }))
      .catch((err) => console.log(`Error fetching data ${err}`));
  }
  render() {
    console.log(this.state.photos);
    return <div></div>;
  }
}

export default App;
