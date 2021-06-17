import "./app.css";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useEffect, useState } from "react";
import { Room, Star, StarBorder } from "@material-ui/icons";
import axios from "axios";
import { format } from "timeago.js";

function App() {
  const myStorage = window.localStorage;
  const [currentUsername, setCurrentUsername] = useState(
    myStorage.getItem("user")
  );
  const [businesses, setBusinesses] = useState([]);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [newPlace, setNewPlace] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [star, setStar] = useState(0);
  const [viewport, setViewport] = useState({
    latitude: 47.040182,
    longitude: 17.071727,
    zoom: 4,
  });

  const handleMarkerClick = (id, lat, long) => {
    setCurrentPlaceId(id);
    setViewport({ ...viewport, latitude: lat, longitude: long });
  };

  const handleAddClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    setNewPlace({
      lat: latitude,
      long: longitude,
    });
  };

  useEffect(() => {
    const getBusinesses = async () => {
      try {
        const allBusinesses = await axios.get("/businesses");
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
        width={viewport.width}
        height={viewport.height}
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        onViewportChange={setViewport}
        mapStyle="mapbox://styles/ibrahim-ali00/ckpyj7c391f4w17o3sw1bkywp"
        onDblClick={currentUsername && handleAddClick}
      >
        {businesses.map((p) => (
          <>
            <Marker
              latitude={biz.lat}
              longitude={biz.long}
              offsetLeft={-3.5 * viewport.zoom}
              offsetTop={-7 * viewport.zoom}
            >
              <Room
                style={{
                  fontSize: 7 * viewport.zoom,
                  color:
                    currentUsername === biz.username ? "tomato" : "slateblue",
                  cursor: "pointer",
                }}
                onClick={() => handleMarkerClick(biz._id, biz.lat, biz.long)}
              />
            </Marker>
            {biz._id === currentPlaceId && (
              <Popup
                key={biz._id}
                latitude={biz.lat}
                longitude={biz.long}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setCurrentPlaceId(null)}
                anchor="left"
              >
                <div className="card">
                  <label>Place</label>
                  <h4 className="place">{biz.title}</h4>
                  <label>Review</label>
                  <p className="desc">{biz.desc}</p>
                  <label>Rating</label>
                  <div className="stars">
                    {Array(biz.rating).fill(<Star className="star" />)}
                  </div>
                  <label>Information</label>
                  <span className="date">{format(biz.createdAt)}</span>
                </div>
              </Popup>
            )}
          </>
        ))}
      </MapGL>
    </div>
  );
}

export default App;
