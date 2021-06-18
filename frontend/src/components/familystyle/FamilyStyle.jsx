import React, { Component } from "react";
import styles from "./FamilyStyle.module.scss";
import MapContainer from "../map/MapContainer";
import BusinessesContainer from "../business/BusinessesContainer"

export default class FamilyStyle extends Component {
  render() {
    return (
      <div className={styles.Wrapper}>
          <MapContainer />
					<BusinessesContainer />
      </div>
    );
  }
}
