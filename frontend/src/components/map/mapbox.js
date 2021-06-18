import * as React from "react";
import MapGL, { Marker, Popup } from "react-map-gl";
import { useEffect, useState } from "react";
import StarIcon from "@material-ui/icons/Star";
import RoomIcon from "@material-ui/icons/Room";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./map.css";

const MAPBOX_TOKEN = require("../../config/mapToken").MAPBOX_TOKEN;

function MapBox() {
  const [businesses, setBusinesses] = useState([]);
  const [currentBusinessId, setCurrentBusinessId] = useState(null);
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.77,
    longitude: -122.43,
    zoom: 11.5,
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
              offsetTop={-3 * viewport.zoom}
              transitionDuration="50"
            >
              <RoomIcon
                className="icon"
                style={{ fontSize: 3 * viewport.zoom }}
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
                <div className="popup">
                  <h4 className="name">{biz.name}</h4>
                  <label>Reviews</label>
                  <div className="stars">
                    {Array(Math.floor(biz.rating)).fill(<StarIcon className="star" />)}
                    {biz.review_count}
                  </div>
                  <div>{biz.price}</div>
                  <div>{biz.location.display_address}</div>
                  <div>{biz.display_phone}</div>
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
