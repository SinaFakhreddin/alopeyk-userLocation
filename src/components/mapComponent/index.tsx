import React, {useEffect} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {useAppStore} from "../../store/locationStore";
import {shallow} from "zustand/shallow";
import {LocationMarker} from "../customFormInputWithMap/LocationMarker";
import {DraggableMarker} from "../customFormInputWithMap/DragableMarker";




const MapComponent = () => {
    const {userLocationStore,coordinates,updateCoordinatesHandler} = useAppStore((store)=>({
        userLocationStore : store.userLocationStore,
        coordinates : store.coordinates,
        updateCoordinatesHandler:store.updateCoordinatesHandler
    }),shallow)
    const position = [51.505, -0.09]


    useEffect(() => {
        updateCoordinatesHandler({
            lng:position[1],
            lat:position[0]
        })
    }, []);


    console.log("mapCompo",[coordinates?.lat , coordinates?.lng])
    return (
        <MapContainer
            center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker
                // setPositionOnFly={(position)=>setPositionOnFly(position)}
            />
            <DraggableMarker
                // setPositionOnDrag={(position)=>setPositionOnDrag(position)}
            />
        </MapContainer>
    );
};

export default MapComponent;
