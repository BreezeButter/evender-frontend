
import { useDispatch } from "react-redux";
import { syncEventNearby } from '../slice/searchSlice'



export default function CurrentGeo({ radi }) {

    const dispatch = useDispatch()

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    function success(pos) {
        const crd = pos.coords;


        dispatch(syncEventNearby({ latitude: crd.latitude, longitude: crd.longitude, radi: +radi }))



        // console.log("Your current position is:");
        // console.log(`Latitude : ${crd.latitude}`);
        // console.log(`Longitude: ${crd.longitude}`);
        // console.log(`More or less ${crd.accuracy} meters.`);

    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);

    return (
        <div></div>
    )
}
