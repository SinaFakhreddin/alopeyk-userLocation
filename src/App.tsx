import {useAppStore} from "./store/locationStore";
import { MapContainer, TileLayer } from 'react-leaflet'
import {shallow} from "zustand/shallow";
import "./App.css"
import "leaflet/dist/leaflet.css"
import MapComponent from "./components/mapComponent";
import ModalComponent from "./components/modalComponent";
import React, {useEffect} from "react";
import location from "./assets/location.svg";
import IconLocation from "./components/iconLocation";
import UserCoordinateFormLogic from "./components/userCoordinateForm/UserCoordinateFormLogic";
import fire from "./api/config";
import {convertedDataFromDB} from "./helpers";


const App = () => {
    const {showModal,getAllLocation,modalHandler,coordinates,updateLocation,progressbar,userLocationStore,updateProgressPercent,updateProgressbar} = useAppStore((store)=>({
        showModal:store?.modal?.showModal,
        modalHandler:store?.modalHandler,
        coordinates:store?.coordinates,
        updateLocation:store?.updateLocation,
        progressbar:store?.progressbar,
        updateProgressbar:store?.updateProgressbar,
        updateProgressPercent:store?.updateProgressPercent,
        userLocationStore:store?.userLocationStore,
        getAllLocation:store?.getAllLocation

    }),shallow)


    useEffect(() => {


        const db = fire.firestore()
        db.collection("userLocations").onSnapshot((snapshot) => {
            convertedDataFromDB(snapshot).then((res)=>getAllLocation(res))
        });

    }, []);


    console.log("userLocationStore",userLocationStore)

    return (
        <div className={'transition-colors'}>
            <MapComponent/>
            <IconLocation/>
            {
                showModal &&
                <ModalComponent icon={<img  src={location} alt=""/>} modalTitle={<span>SHARE LOCATION</span>} modalBody={<UserCoordinateFormLogic updateLocation={updateLocation} coordinates={coordinates} progressbar={progressbar} updateProgressbar={updateProgressbar} modalHandler={modalHandler} updateProgressPercent={updateProgressPercent}/>}/>
            }
        </div>
    );
};

export default App;
