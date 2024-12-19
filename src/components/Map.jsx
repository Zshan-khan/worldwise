import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();
  const [searchParams, setSerachParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <p>
        Position: {lat}, {lng}
      </p>
      <button
        onClick={() => {
          setSerachParams({ lat: 50, lng: 25 });
        }}
      >
        Change Position
      </button>
    </div>
  );
}

export default Map;
