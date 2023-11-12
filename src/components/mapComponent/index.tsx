import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {useAppStore} from "../../store/locationStore";
import {shallow} from "zustand/shallow";
import { TILE_LAYER_ATTRIBUTION, TILE_LAYER_URL} from "../../constants";




const MapComponent = () => {
    const {userLocationStore} = useAppStore((store)=>({
        userLocationStore : store?.userLocationStore,
    }),shallow)





    return (
        <MapContainer
            center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution={TILE_LAYER_ATTRIBUTION}
                url={TILE_LAYER_URL}
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
