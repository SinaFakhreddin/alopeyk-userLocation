import {useAppStore} from "./store/locationStore";
import {shallow} from "zustand/shallow";
import "./App.css"
import "leaflet/dist/leaflet.css"
import MapComponent from "./components/mapComponent";
import ModalComponent from "./components/modalComponent";
import React, {useEffect, useState} from "react";
import location from "./assets/location.svg";
import warning from "./assets/warning.svg";
import IconLocation from "./components/iconLocation";
import UserCoordinateFormLogic from "./components/userCoordinateForm/UserCoordinateFormLogic";
import fire from "./api/config";
import {convertedDataFromDB} from "./helpers";
import WelcomeComponent from "./components/welcomeComponent";


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
    const [welcomeModalShow, setWelcomeModalShow] = useState<boolean>(true);


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
            {showModal && <ModalComponent icon={<img  src={location} alt=""/>} modalTitle={<span>SHARE LOCATION</span>} modalBody={<UserCoordinateFormLogic updateLocation={updateLocation} coordinates={coordinates} progressbar={progressbar} updateProgressbar={updateProgressbar} modalHandler={modalHandler} updateProgressPercent={updateProgressPercent}/>}/>}
            {welcomeModalShow && <ModalComponent  icon={<img src={warning} />} modalTitle={<span>Warning</span>} modalBody={<WelcomeComponent setWelcomeModalShow={setWelcomeModalShow}/>}/>}
        </div>
    );
};

export default App;
