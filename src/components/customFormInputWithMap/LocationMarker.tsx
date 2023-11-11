import React, {useEffect, useState} from "react";
import {Marker, Popup, useMapEvents} from "react-leaflet";
import {shallow} from "zustand/shallow";
import {useAppStore} from "../../store/locationStore";

type LocationMarkerProps = {
    setPositionOnFly:(position:{lang:number , lat:number})=>void
}


export function LocationMarker({}:LocationMarkerProps) {
    const [position, setPosition] = useState(null)
    const {updateCoordinatesHandler} = useAppStore((store)=>({
        updateCoordinatesHandler:store?.updateCoordinatesHandler
    }),shallow)


    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            console.log("eventFound",e)
            setPosition(e?.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })


    useEffect(() => {
        updateCoordinatesHandler(position)
    }, [position]);


    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    )
}