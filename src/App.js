import React, { Component } from "react";
import axios from "axios";
import { apiKey } from "./config";
import Nav from "./components/Nav";
import PhotoContainer from "./components/PhotoContainer";
import SearchForm from "./components/SearchForm";
import { Route, Switch, Redirect } from "react-router-dom";

/**
 * @constant {key} - To store API_KEY value.
 */
const key = apiKey;

/**
 * @extends {App} - React stateful component.
 * @method {componentDidMount} - React built in lifecycle method, invoked immediately after component is mounted.
 * @method {seachByQuery} - Fetch data from flickr api by user search query.
 * @method {catTopic} - Fetc data from flickr api by tag name cat.
 * @method {dogTopic} - Fetc data from flickr api by tag name dog.
 * @method {computerTopic} - Fetc data from flickr api by tag name computers.
 * @method {fetchData} - Returns promise.
 * @method {handleError} - Handles error message.
 */
class App extends Component {
  state = {
    photos: [],
    cats: [],
    dogs: [],
    computers: [],
    query: "",
  };

  componentDidMount() {
    this.catTopic();
    this.dogTopic();
    this.computerTopic();
  }
  fetchData = (query) => {
    return axios.get(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    );
  };
  handleError = (err) => {
    console.log(`Error fetching and parsing data ${err}`);
  };
  searchByQuery = (query) => {
    this.setState({ loading: true }, () => {
      this.fetchData(query)
        .then(({ data }) =>
          this.setState({
            photos: data.photos.photo,
            query,
            loading: false,
          })
        )
        .catch((err) => this.handleError(err));
    });
  };
  catTopic = () => {
    this.setState({ loading: true }, () => {
      this.fetchData("cats")
        .then(({ data }) =>
          this.setState({ cats: data.photos.photo, loading: false })
        )
        .catch((err) => this.handleError(err));
    });
  };
  dogTopic = () => {
    this.setState({ loading: true }, () => {
      this.fetchData("dogs")
        .then(({ data }) =>
          this.setState({ dogs: data.photos.photo, loading: false })
        )
        .catch((err) => this.handleError(err));
    });
  };
  computerTopic = () => {
    this.setState({ loading: true }, () => {
      this.fetchData("computers")
        .then(({ data }) =>
          this.setState({ computers: data.photos.photo, loading: false })
        )
        .catch((err) => this.handleError(err));
    });
  };
  routes = () => [
    {
      path: "/cats",
      title: "Cats",
      photos: this.state.cats,
    },
    {
      path: "/dogs",
      title: "Dogs",
      photos: this.state.dogs,
    },
    {
      path: "/computers",
      title: "Computers",
      photos: this.state.computers,
    },
    {
      path: "/search/:query",
      title: this.state.query,
      photos: this.state.photos,
    },
  ];

  render() {
    const routes = this.routes();
    return (
      <div className="container">
        <SearchForm search={this.searchByQuery} />
        <Nav />
        <Switch>
          <Redirect exact path="/" to="/cats" />
          {routes.map((route, i) => (
            <Route
              key={i.toString()}
              exact
              path={route.path}
              render={() =>
                this.state.loading ? (
                  <h1 className="loading">Loading... !</h1>
                ) : (
                  <PhotoContainer title={route.title} photos={route.photos} />
                )
              }
            />
          ))}
        </Switch>
      </div>
    );
  }
}

export default App;
