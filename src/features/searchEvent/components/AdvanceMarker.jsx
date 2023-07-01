import { useState } from "react";
import {
    GoogleMap,
    Marker,
    InfoWindow,
    withGoogleMap,
    withScriptjs,
} from "react-google-maps";

import { useSelector } from "react-redux";
import { GoogleIcon } from "../../../icons";
import { useNavigate } from "react-router-dom";
import EventBarSearch from "../../../features/searchEvent/components/EventBarSearch";
import CurrentGeo from "../../searchEvent/components/CurrentGeo";

const MapComponent = () => {
    const [open, setOpen] = useState(null);
    const navigate = useNavigate();
    const events = useSelector((state) => state.event.events);
    const filterEvent = useSelector((state) => state.search.eventFilter);
    const [location, setLocation] = useState({ latitude: 13.736717, longitude: 100.523186 });



    const newEvent = events.map((el) => {
        const { latitude, longitude, ...rest } = el;
        return {
            ...rest,
            position: {
                lat: +el.latitude,
                lng: +el.longitude,
            },
        };
    });
    const newfilterEvent = filterEvent.map((el) => {
        const { latitude, longitude, ...rest } = el;
        return {
            ...rest,
            position: {
                lat: +el.latitude,
                lng: +el.longitude,
            },
        };
    });

    console.log("newEvent ", newEvent);
    console.log(" newfilterEvent ", newfilterEvent);

    const center = {
        lat: location.latitude ? location.latitude : 13.736717,
        lng: location.longitude ? location.longitude : 100.523186
    };

    const hdlOnClick = (el) => () => {
        console.log(el.title, "el.name");
        setOpen(el.title);
    };

    return (

        <GoogleMap defaultZoom={15} defaultCenter={center}>
            <CurrentGeo setLocation={setLocation} />

            {(newfilterEvent ? newfilterEvent : newEvent).map((el, index) => (
                <div key={index}>
                    <Marker
                        position={el.position}
                        name={el.title}
                        onClick={hdlOnClick(el)}
                    >
                        {open === el.title && (
                            <InfoWindow>
                                <div className="bg-white grid grid-cols-2  w-[300px] h-[140px] gap-4">
                                    <div className="flex justify-center items-center flex-col gap-y-2">
                                        <h3 className="font-semibold text-center">
                                            {el.title}
                                        </h3>
                                        <h4 className="font-semibold">
                                            @ {el.placeName}
                                        </h4>
                                        <div className="flex">
                                            {el.JoinEventUsers?.map(
                                                (JoinEventUser, idex) => {
                                                    return (
                                                        <img
                                                            key={idex}
                                                            src={
                                                                JoinEventUser
                                                                    .User.image
                                                            }
                                                            alt=""
                                                            className="w-10 h-10 bg-slate-500 rounded-full -mr-4"
                                                        />
                                                    );
                                                }
                                            )}
                                        </div>
                                        <p className=" border-gray-300">
                                            {el.JoinEventUsers.length}/30
                                        </p>
                                    </div>
                                    <div className="grid grid-rows-2 text-center">
                                        <div className="flex items-center justify-center p-1">
                                            <a
                                                href={`http://maps.google.com/?q=${el.position.lat},${el.position.lng}`}
                                                className="flex flex-col items-center text-center"
                                            >
                                                <GoogleIcon className="w-[20px] h-[20px] items-center text-center" />
                                                <p>Go to Google Map</p>
                                            </a>
                                        </div>
                                        <div className="w-30 h-10 bg-white rounded-md border-slate-400  border-[1px] hover:bg-slate-300 hover:text-white">
                                            <button
                                                className="text-sm w-20 h-10"
                                                onClick={() =>
                                                    navigate(
                                                        `/evender/eventDetail/${el.id}`
                                                    )
                                                }
                                            >
                                                Event Detail
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </InfoWindow>
                        )}
                    </Marker>
                </div>
            ))}
        </GoogleMap>
    );
};

const WrappedMapComponent = withScriptjs(withGoogleMap(MapComponent));

const App = () => {
    return (
        <div className="flex flex-row border-t border-gray-300">
            <div>
                <EventBarSearch />
            </div>
            <div className="w-full h-screen rounded-lg">
                <WrappedMapComponent
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyB2Gc9Jv8hrIktjpt8HxgW4-M7mYY_5928&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div>Loading...</div>}
                    containerElement={<div style={{ height: "100%" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                />
            </div>
        </div>

    );
};

export default App;