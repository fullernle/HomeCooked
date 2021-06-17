import * as React from "react";
import MapGL, { Marker, Popup } from "react-map-gl";
import { useEffect, useState } from "react";
import StarIcon  from "@material-ui/icons/Star";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import { withRouter } from "react-router-dom";
import axios from "axios";

const MAPBOX_TOKEN = require("../../config/mapToken").MAPBOX_TOKEN;

function MapBox() {
  const [businesses, setBusinesses] = useState([]);
  const [currentBusinessId, setCurrentBusinessId] = useState(null);
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.8,
    longitude: -122.35,
    zoom: 9.5,
  });

  const handleMarkerClick = (id, latitude, longitude) => {
    setCurrentBusinessId(id);
    setViewport({ ...viewport, latitude: latitude, longitude: longitude });
  };

  useEffect(() => {
    const getBusinesses = async () => {
      try {
        const allBusinesses = await axios.get("/api/businesses");
        setBusinesses(allBusinesses.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBusinesses();
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        width="50%"
        height="100%"
        mapStyle="mapbox://styles/ibrahim-ali00/ckpyj7c391f4w17o3sw1bkywp"
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        {businesses.map((biz) => (
          <>
            <Marker
              latitude={biz.coordinates.latitude}
              longitude={biz.coordinates.longitude}
              offsetLeft={-3.5 * viewport.zoom}
              offsetTop={-7 * viewport.zoom}
            >
              <RestaurantIcon
                style={{
                  fontSize: 7 * viewport.zoom,
                  color: "slateblue",
                  cursor: "pointer",
                }}
                onClick={() =>
                  handleMarkerClick(
                    biz._id,
                    biz.coordinates.latitude,
                    biz.coordinates.longitude
                  )
                }
              />
            </Marker>
            {biz._id === currentBusinessId && (
              <Popup
                key={biz._id}
                latitude={biz.coordinates.latitude}
                longitude={biz.coordinates.longitude}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setCurrentBusinessId(null)}
                anchor="left"
              >
                <div className="card">
                  <label>Place</label>
                  <h4 className="place">{biz.name}</h4>
                  <label>Review</label>
                  <p className="desc">{biz.address}</p>
                  <label>Rating</label>
                  <div className="stars">
                    {Array(biz.rating).fill(<StarIcon className="star" />)}
                  </div>
                </div>
              </Popup>
            )}
          </>
        ))}
      </MapGL>
    </div>
  );
}

export default withRouter(MapBox);