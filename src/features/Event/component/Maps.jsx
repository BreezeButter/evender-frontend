import { useMemo } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";

function Maps({ selected, mapContainerClassName }) {
    // const [selected, setSelected] = useState(null);
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDENUzpP8_nFEkz1ZbBCFqgkyF1nrPuryE",
        libraries: ["places"],
    });

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <Map
            selected={selected}
            mapContainerClassName={`${mapContainerClassName}`}
        />
    );
}

export default Maps;
