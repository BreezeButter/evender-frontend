import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
// import PlacesAutocomplete from "./PlacesAutocomplete";
// import "@reach/combobox/styles.css";
import { useState } from "react";
// import AutoCompleteComponent from "./Autocomplete";

export default function Map({ selected }) {
    const center = useMemo(() => ({ lat: 13.736717, lng: 100.523186 }), []);
    // const [selected, setSelected] = useState(null);
    // console.log("=========", { selected });

    return (
        <>
            <GoogleMap
                zoom={10}
                center={selected ? selected : center}
                mapContainerClassName="map-container w-[150px] h-[150px]"
            >
                {selected && <MarkerF position={selected} />}
            </GoogleMap>
        </>
    );
}
