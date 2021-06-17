import * as React from "react";
import MapGL, { Marker, Popup } from "react-map-gl";
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
<<<<<<< HEAD
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
=======

  componentDidMount() {
    this.props.fetchBusinesses();
  }

  render() {
    const { viewport } = this.state;
    const { businesses } = this.props;

    if (this.props.businesses.length < 1) {
      return null;
    } else {
      return (
        <MapGL
          {...viewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          width={viewport.width}
          height={viewport.height}
          latitude={viewport.latitude}
          longitude={viewport.longitude}
          zoom={viewport.zoom}
          onViewportChange={(viewport) => this.setState({ viewport })}
          mapStyle="mapbox://styles/ibrahim-ali00/ckpyj7c391f4w17o3sw1bkywp"
        >
          {businesses.map((biz) => {
            return (
              <>
                <Marker
                  latitude={biz.coordinates.latitude}
                  longitude={biz.coordinates.longitude}
                  offsetLeft={-10}
                  offsetTop={-10}
                >
                  <RestaurantIcon
                    style={{
                      fontSize: 7 * viewport.zoom,
                      color: "tomato",
                      cursor: "pointer",
                    }}
                  />
                </Marker>

                <Popup key={biz._id} latitude={biz.coordinates.latitude} longitude={biz.coordinates.longitude} closeButton={true} closeOnClick={true} anchor="left">

								</Popup>
              </>
            );
          })}
        </MapGL>
      );
    }
>>>>>>> b2370e7174afc90b7454331ca7e9c00b652a5a44
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
