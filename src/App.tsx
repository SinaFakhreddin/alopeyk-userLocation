import {useAppStore} from "./store/locationStore";
import { MapContainer, TileLayer } from 'react-leaflet'
import {shallow} from "zustand/shallow";
import "./App.css"
import "leaflet/dist/leaflet.css"
import MapComponent from "./components/mapComponent";
import ModalComponent from "./components/modalComponent";
import React from "react";
import location from "./assets/location.svg";
import IconLocation from "./components/iconLocation";
import UserCoordinateFormLogic from "./components/userCoordinateForm/UserCoordinateFormLogic";


const App = () => {
    const {showModal,modalHandler,coordinates,updateLocation} = useAppStore((store)=>({
        showModal:store.modal.showModal,
        modalHandler:store.modalHandler,
        coordinates:store.coordinates,
        updateLocation:store.updateLocation
    }),shallow)


    return (
        <div className={'transition-colors'}>
            <MapComponent/>
            <IconLocation/>
            {
                showModal &&
                <ModalComponent icon={<img  src={location} alt=""/>} modalTitle={<span>SHARE LOCATION</span>} modalBody={<UserCoordinateFormLogic updateLocation={updateLocation} coordinates={coordinates} modalHandler={modalHandler}/>}/>
            }
        </div>
    );
};

export default App;
