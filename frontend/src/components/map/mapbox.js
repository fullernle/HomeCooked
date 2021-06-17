import { useEffect, useState } from "react";
import MapGL, { Marker, Popup } from "react-map-gl";
import { Star } from "@material-ui/icons";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import { withRouter } from "react-router-dom";
import * as React from "react";

const MAPBOX_TOKEN = require("../../config/mapToken").MAPBOX_TOKEN;

class MapBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 400,
        height: 400,
        latitude: 37.8,
        longitude: -122.35,
        zoom: 9.5,
      },
      businesses: [],
    };
  }

  componentDidMount() {
    this.props.fetchBusinesses();
  }

  render() {
    const { viewport } = this.state;

    if (this.props.businesses.length < 1) {
      return null;
    } else {

      return (
				<div>hello</div>
        // <MapGL
        //   {...viewport}
        //   mapboxApiAccessToken={MAPBOX_TOKEN}
        //   width={viewport.width}
        //   height={viewport.height}
        //   latitude={viewport.latitude}
        //   longitude={viewport.longitude}
        //   zoom={viewport.zoom}
        //   onViewportChange={(viewport) => this.setState({ viewport })}
        //   mapStyle="mapbox://styles/ibrahim-ali00/ckpyj7c391f4w17o3sw1bkywp"
        // >
        //   <Marker
        //     latitude={37.8199}
        //     longitude={-122.4783}
        //     offsetLeft={-10}
        //     offsetTop={-10}
        //   >
        //     <RestaurantIcon
        //       style={{
        //         fontSize: 7 * viewport.zoom,
        //         color: "tomato",
        //         cursor: "pointer",
        //       }}
        //     />
        //   </Marker>
        // </MapGL>
      );
    }
  }
}

export default withRouter(MapBox);

// const handleMarkerClick = (id, lat, long) => {
//   setCurrentPlaceId(id);
//   setViewport({ ...viewport, latitude: lat, longitude: long });
// };

// useEffect(() => {
//   const getBusinesses = async () => {
//     try {
//       const res = await axios.get(`/api/businesses/`);
//       setBusinesses(res.body);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   getBusinesses();
// }, []);

// return (
//   <MapGL
//     {...viewport}
//     width={viewport.width}
//     height={viewport.height}
//     latitude={viewport.latitude}
//     longitude={viewport.longitude}
//     zoom={viewport.zoom}
//     mapStyle="mapbox://styles/ibrahim-ali00/ckpyj7c391f4w17o3sw1bkywp"
//     onViewportChange={setViewport}
//     mapboxApiAccessToken={MAPBOX_TOKEN}
//   />

// );
