import create from 'zustand';
import {Coordinates, Location, Modal, MyStore, ProgressBar} from "../../types";
import {Simulate} from "react-dom/test-utils";
import progress = Simulate.progress;


const initialUserLocationState:Location[] = []

const initialModalState :Pick<Modal, "showModal"> ={
    showModal:false,
}
const initialUserCoordinates:Coordinates = {
    lng:null,
    lat:null
}

const initialProgressBar:ProgressBar = {
    showProgressBar:false,
    percent:0
}

export const useAppStore = create<MyStore>((set)=>({
    userLocationStore:initialUserLocationState,
    modal:initialModalState,
    progressbar:initialProgressBar,
    updateProgressbar : (show:boolean)=>set((store)=>({...store , progressbar:{...store.progressbar,showProgressBar:show}})),
    updateProgressPercent : (percent:number|string)=>set((store)=>({...store,progressbar:{...store.progressbar,percent}})),
    updateCoordinatesHandler:(coordinates:Coordinates)=>set((store)=>{
        return {
            ...store,
            coordinates:{
                locationName: undefined,
                locationOnMap: coordinates,
                locationType :undefined,
                logo:undefined,
            }
        }
    }),
    coordinates:initialUserCoordinates,
    updateLocation : (location:Location)=>set((store)=>{
        console.log("here", store , location)
        return {
            ...store,
            userLocationStore:[
                ...store.userLocationStore,
                location
            ]
        }

    }),
    modalHandler:(show:boolean)=>set((store)=>({...store, modal:{showModal:show}})),
    getAllLocation:(locations:Location[])=>set((store)=>{
        console.log("store",store,"location",locations)
        return {
            ...store,
            userLocationStore:locations
        }
    })
}))

