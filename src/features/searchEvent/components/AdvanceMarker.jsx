import { useState } from "react";
import { Bird, ChevronRight } from "lucide-react";
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
import { Separator } from "../../../components/ui/separator";

const MapComponent = () => {
    const [open, setOpen] = useState(null);
    const navigate = useNavigate();
    const events = useSelector((state) => state.event.events);
    const filterEvent = useSelector((state) => state.search.eventFilter);
    const me = useSelector((state) => state.auth.users);
    const [location, setLocation] = useState({
        latitude: 13.736717,
        longitude: 100.523186,
    });

    const mePosition = {
        lat: +location.latitude,
        lag: +location.longitude,
    };
    console.log(mePosition);

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

    const center = {
        lat: location.latitude ? location.latitude : 13.736717,
        lng: location.longitude ? location.longitude : 100.523186,
    };

    const hdlOnClick = (el) => () => {
        console.log(el.title, "el.name");
        setOpen(el.title);
    };

    const meMarker = new google.maps.Marker({
        position: new google.maps.LatLng(
            +location.latitude,
            +location.longitude
        ),
        icon: {
            url: "/src/assets/me.gif",
            scaledSize: new window.google.maps.Size(400, 200),
        },
    });
    const allMarker = new google.maps.Marker({
        icon: {
            url: "/src/assets/icons8-location-1001.png",
            scaledSize: new window.google.maps.Size(90, 90),
        },
    });

    return (
        <GoogleMap defaultZoom={15} defaultCenter={center}>
            <Marker
                position={meMarker.position}
                icon={meMarker.icon}
                onClick={hdlOnClick(
                    <InfoWindow>
                        <div className=" bg-white w-[100px] h-[80px]">
                            <h2>Me</h2>
                        </div>
                    </InfoWindow>
                )}
            />
            <CurrentGeo setLocation={setLocation} />
            {(newfilterEvent ? newfilterEvent : newEvent).map((el, index) => (
                <div key={index}>
                    <Marker
                        position={el.position}
                        name={el.title}
                        onClick={hdlOnClick(el)}
                        icon={allMarker.icon}
                    >
                        {open === el.title && (
                            // <InfoWindow>
                            //     <div className="bg-white grid grid-cols-2  max-w-[300px] h-[140px] gap-4 transition-transform ">
                            //         <div className="flex justify-center items-center flex-col gap-y-2">
                            //             <h3 className="font-medium text-center text-sm text-darkgraycute">
                            //                 {el.title}
                            //             </h3>
                            //             <h4 className="font-light text-xs text-darkgraycute">
                            //                 at {el.placeName}
                            //             </h4>
                            //             <div className="flex">
                            //                 {el.JoinEventUsers?.map(
                            //                     (JoinEventUser, idex) => {
                            //                         return (
                            //                             <img
                            //                                 key={idex}
                            //                                 src={
                            //                                     JoinEventUser
                            //                                         .User.image
                            //                                 }
                            //                                 alt=""
                            //                                 className="w-10 h-10 bg-slate-500 rounded-full -mr-4"
                            //                             />
                            //                         );
                            //                     }
                            //                 )}
                            //             </div>
                            //             <p className=" border-gray-300">
                            //                 {`${el.JoinEventUsers.length}/${el.capacity}`}
                            //             </p>
                            //         </div>
                            //         <div className="grid grid-rows-2 text-center">
                            //             <div className="flex items-center justify-center p-1">
                            //                 <a
                            //                     href={`http://maps.google.com/?q=${el.position.lat},${el.position.lng}`}
                            //                     className="flex flex-col items-center text-center"
                            //                 >
                            //                     <GoogleIcon className="w-[20px] h-[20px] items-center text-center" />
                            //                     <p>Go to Google Map</p>
                            //                 </a>
                            //             </div>
                            //             <div className="w-30 h-10 bg-white rounded-md border-darkgraycute  border-[1px] hover:bg-darkgraycute hover:text-white">
                            // <button
                            //     className="text-sm w-20 h-10"
                            //     onClick={() =>
                            //         navigate(
                            //             `/evender/eventDetail/${el.id}`
                            //         )
                            //     }
                            // >
                            //     Event Detail
                            // </button>
                            //             </div>
                            //         </div>
                            //     </div>
                            // </InfoWindow>
                            <InfoWindow>
                                <div className="max-w-[274px] h-[100px] -mb-1  ">
                                    <div className="flex flex-row justify-between">
                                        <div className="space-y-1 ">
                                            <h4 className="text-sm font-medium leading-none text-lightbluecute cursor-pointer">
                                                {el.title}
                                            </h4>
                                            <p className="text-xs text-gray-500 ">
                                                at {el.placeName}
                                            </p>
                                        </div>

                                        <div className="flex  flex-col justify-between ">
                                            <div className=""></div>
                                            <a
                                                href={`http://maps.google.com/?q=${el.position.lat},${el.position.lng}`}
                                                className="flex flex-col items-center"
                                            >
                                                <div className="flex flex-row w-[87px]  justify-end hover:text-darkgraycute hover:underline">
                                                    <p className="text-[10px]  font-light ">
                                                        Google Maps
                                                    </p>
                                                    <ChevronRight className="h-3.5 stroke-[1px] w-3.5" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <Separator className="my-2 bg-gray-300" />
                                    <div className="flex h-5 items-center space-x-4 text-sm">
                                        <div className="flex flex-row mr-2.5">
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
                                                            className="w-10 h-10 bg-slate-500 rounded-full -mr-4 mt-5  object-cover "
                                                        />
                                                    );
                                                }
                                            )}
                                        </div>
                                        <Separator
                                            orientation="vertical"
                                            className="bg-gray-300 h-10 mt-5"
                                        />
                                        <div className="flex items-center mt-5 text-darkgraycute">
                                            {`${el.JoinEventUsers.length}/${el.capacity}`}
                                        </div>
                                        <Separator
                                            orientation="vertical"
                                            className="bg-gray-300 h-10 mt-5"
                                        />
                                        <div>
                                            <button
                                                className="text-xs mt-5 mr-2 cursor-pointer hover:underline hover:text-lightbluecute text-darkgraycute"
                                                onClick={() =>
                                                    navigate(
                                                        `/evender/eventDetail/${el.id}`
                                                    )
                                                }
                                            >
                                                More details
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
        <div className="relative border border-gray-300 ">
            <div className="max-w-[500px] absolute z-10 rounded-xl mt-[-46px] ml-[150px] drop-shadow-2xl">
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
