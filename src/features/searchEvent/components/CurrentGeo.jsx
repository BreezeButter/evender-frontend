import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { syncEventNearby } from '../slice/searchSlice'


export default function CurrentGeo() {


    let crd = ""


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(syncEventNearby({ latitude: crd.latitude, longitude: crd.longitude }))
    }, []);

    console.log("--->", crd)
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    function success(pos) {
        const crd = pos.coords;
        // return crd
        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);


    }



    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);

    return (
        <div></div>
    )
}
