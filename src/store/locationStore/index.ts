import create from 'zustand';
import {Coordinates, Location, Modal, MyStore} from "../../types";

const initialUserLocationState = {
    locationName: undefined,
    locationOnMap: undefined,
    locationType :undefined,
    logo:undefined,
}

const initialModalState :Pick<Modal, "showModal"> ={
    showModal:false,
}
const initialUserCoordinates:Coordinates = {
    lng:null,
    lat:null
}

export const useAppStore = create<MyStore>((set)=>({
    userLocationStore:initialUserLocationState,
    modal:initialModalState,
    updateCoordinatesHandler:(coordinates:Coordinates)=>set((store)=>({...store , coordinates})),
    coordinates:initialUserCoordinates,
    updateLocation : (location:Location)=>set((store)=>({...store , userLocationStore:location})),
    modalHandler:(show:boolean)=>set((store)=>({...store, modal:{showModal:show}}))
}))

