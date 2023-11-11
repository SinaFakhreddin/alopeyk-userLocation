import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {Marker, Popup} from "react-leaflet";
import {shallow} from "zustand/shallow";
import {useAppStore} from "../../store/locationStore";

type DraggableMarkerProps = {
    setPositionOnDrag:(position:{lng:number , lat:number})=>void

}


export function DraggableMarker({}:DraggableMarkerProps) {
    const [draggable, setDraggable] = useState(false)
    const {updateCoordinatesHandler} = useAppStore((store)=>({
        updateCoordinatesHandler:store?.updateCoordinatesHandler
    }),shallow)
    const [position, setPosition] = useState({lat: 51.505,
        lng: -0.09,})



    const markerRef = useRef(null)
    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    setPosition(marker.getLatLng())
                }
            },
        }),
        [],
    )
    const toggleDraggable = useCallback(() => {
        setDraggable((d) => !d)
    }, [])


    useEffect(() => {
        updateCoordinatesHandler(position)
    }, [position]);



    return (
        <Marker
            draggable={draggable}
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}>
            <Popup minWidth={90}>
                <span onClick={toggleDraggable}>
                  {draggable
                      ? 'Marker is draggable'
                      : 'Click here to make marker draggable'}
                </span>
            </Popup>
        </Marker>
    )
}