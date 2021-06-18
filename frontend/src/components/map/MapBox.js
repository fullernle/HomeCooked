import * as React from "react";
import MapGL, { Marker, Popup } from "react-map-gl";
import { useEffect, useState } from "react";
import StarIcon from "@material-ui/icons/Star";
import RoomIcon from "@material-ui/icons/Room";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { StylesProvider } from "@material-ui/core";
import styles from "./Map.module.scss";
import { styled } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const MAPBOX_TOKEN = require("../../config/mapToken").MAPBOX_TOKEN;

const MyStar = styled(StarIcon)({
  color: "rgb(248, 38, 38)",
  width: "2vh",
  backgroundColor: "transparent",
});

function MapBox(props) {
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
  // filterBusinesses = (business) =>{
  //   if (props.query === "") {
  //     return business;
  //     else if(businiess)
  //   }
  // };
  // console.log(props)
  return (
    <div style={{ height: "100vh", width: "60vw" }}>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/ibrahim-ali00/ckpyj7c391f4w17o3sw1bkywp"
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        {businesses
          .filter((biz) => {
            if (props.query === "") {
              return true;
            } else if (
              biz.categories[0].title
                .toLowerCase()
                .includes(props.query.toLowerCase())
            ) {
              return true;
            }
          })
          .map((biz) => (
            <>
              <Marker
                latitude={biz.coordinates.latitude}
                longitude={biz.coordinates.longitude}
                offsetLeft={-3.5 * viewport.zoom}
                offsetTop={-3 * viewport.zoom}
                transitionDuration="50"
              >
                <RoomIcon
                  className={styles.Icon}
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
                  className={styles.PopupContainer}
                >
                  <div className={styles.Popup}>
                    <div className={styles.PopupHeader}>
                      <Link to={`/homecook/${biz._id}`} className={styles.Name}>
                        {biz.name}
                      </Link>
                      <div className={styles.Category}>
                        {biz.categories[0].title}
                      </div>
                    </div>
                    {/* <label>Reviews</label> */}
                    <div className={styles.SmallDetails}>
                      <div className={styles.Price}>{biz.price}</div>
                      <div className={styles.Ratings}>
                        <div className={styles.Rating}>
                          {Array(Math.floor(biz.rating)).fill(<MyStar />)}
                        </div>

                        <div className={styles.ReviewCount}>
                          ({biz.review_count})
                        </div>
                      </div>
                    </div>
                    {/* <div>{biz.location.display_address}</div>
                  <div>{biz.display_phone}</div> */}
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

/* justify-content: center; */
