import React, {useEffect} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {useAppStore} from "../../store/locationStore";
import {shallow} from "zustand/shallow";
import {LocationMarker} from "../customFormInputWithMap/LocationMarker";
import {DraggableMarker} from "../customFormInputWithMap/DragableMarker";




const MapComponent = () => {
    const {userLocationStore,coordinates,updateCoordinatesHandler} = useAppStore((store)=>({
        userLocationStore : store?.userLocationStore,
        coordinates : store?.coordinates,
        updateCoordinatesHandler:store?.updateCoordinatesHandler
    }),shallow)





    return (
        <MapContainer
            center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                userLocationStore?.map((userLoc)=>{
                    return (
                        <Marker className={'w-[100px]'} position={userLoc.locationOnMap}>
                            <Popup>
                                <div className={'flex flex-col items-center gap-2'}>
                                        <img  src={userLoc.logo} />
                                        <span className={'text-md font-semibold'}>{userLoc.locationName}</span>
                                        <span className={'text-sm font-semibold'}>{userLoc.locationType}</span>
                                </div>
                            </Popup>
                        </Marker>
                    )
                })
            }

        </MapContainer>
    );
};

export default MapComponent;
