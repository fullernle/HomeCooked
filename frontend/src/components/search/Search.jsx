import React, { Component } from "react";
import styles from "./Search.module.scss";
import MapContainer from "../map/MapContainer";
import BusinessesContainer from "../business/BusinessesIndexContainer";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: {},
      loading: false,
      message: "",
    };
    this.cancel = "";
  }

  handleOnInputChange = (event) => {
    const query = event.target.value;
    if (!query) {
      this.setState({
        query,
        results: {},
      });
    } else {
      this.setState({ query });
    }
  };
  render() {
    const { query } = this.state;
    console.warn(this.state);
    return (
      <div>
        <div class={styles.SearchContainer}>
          <input
            className={styles.SearchInput}
            type="text"
            name="query"
            value={query}
            placeholder="Search"
            onChange={this.handleOnInputChange}
          />

          <i class="fas fa-search" style={{"margin-right": "12px"}}></i>
        </div>
        <div className={styles.Wrapper}>
          <BusinessesContainer query={query} />
          <MapContainer query={query} />
        </div>
      </div>
    );
  }
}
