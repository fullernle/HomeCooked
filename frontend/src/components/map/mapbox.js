import * as React from "react";
import MapGL, { Marker, Popup } from "react-map-gl";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import { withRouter } from "react-router-dom";

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
  // componentDidMount() {
  //   this.props.fetchBusinesses();
  // }
  render() {
    const { viewport } = this.state;

    return (
      <MapGL
        mapboxApiAccessToken={MAPBOX_TOKEN}
        width={viewport.width}
        height={viewport.height}
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        onViewportChange={(viewport) => this.setState({ viewport })}
        mapStyle="mapbox://styles/ibrahim-ali00/ckpyj7c391f4w17o3sw1bkywp"
      >
        {this.state.businesses.map((biz) => (
          <Marker
            latitude={37.8199}
            longitude={-122.4783}
            offsetLeft={-10}
            offsetTop={-10}
          >
            <RestaurantIcon
              style={{ fontSize: this.state.viewport.zoom * 2 }}
            />
          </Marker>
          // <Popup
          //   latitude={37.8199}
          //   longitude={-122.4783}
          //   closeButton={true}
          //   closeOnClick={false}
          //   anchor="left"
          // >
          //   <div className="card"></div>
          // </Popup>
        ))}
      </MapGL>
    );
  }
}

export default withRouter(MapBox);
