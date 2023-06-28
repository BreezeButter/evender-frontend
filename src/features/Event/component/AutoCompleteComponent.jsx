import React from "react";
import Autocomplete from "react-google-autocomplete";

const AutoCompleteComponent = ({ setSelected }) => {
    const placeSelected = (place) => {
        function splitAddress(address) {
            return address.split(", ");
        }

        const latitude = place?.geometry?.location.lat();
        const longtitude = place?.geometry?.location.lng();
        const placeId = place?.place_id;
        const placeName = place?.address_components[0]?.long_name;
        const placeCountry = place?.address_components[4]?.long_name;
        const placeProvince = place?.address_components[3]?.long_name;
        const placeAdress = splitAddress(place.formatted_address);

        setSelected({
            lat: latitude,
            lng: longtitude,
            placeId,
            placeName,
            placeProvince,
            placeCountry,
        });
        console.log({ latitude, longtitude, placeCountry });
    };

    return (
        <div>
            <Autocomplete
                className="w-80 h-7 rounded"
                onPlaceSelected={placeSelected}
                options={{
                    types: ["address"],
                    //   componentRestrictions: { country: "th" },
                }}
            />
        </div>
    );
};

export default AutoCompleteComponent;
