export type Coordinates  = {
    lng:number | null
    lat:number | null
}

export interface Location {
    locationName: string | undefined,
    locationOnMap:Coordinates | undefined,
    locationType :string | undefined,
    logo:string | undefined,
    id:string|null
}

export type Modal = {
    showModal:boolean,

}

export type ProgressBar = {
    showProgressBar:boolean,
    percent:number|string
}


export interface MyStore {
    userLocationStore : Location[]
    updateLocation: (location:Location)=>MyStore,
    showModal:Modal,
    modalHandler:(show:boolean)=>MyStore,
    coordinates:Coordinates,
    updateCoordinatesHandler:(coordinates:Coordinates)=>MyStore,
    progressbar:ProgressBar,
    updateProgressbar:(show:boolean)=>MyStore,
    updateProgressPercent:(percent:number|string)=>MyStore,
    getAllLocation:(locations:Location[])=>MyStore
}

export interface CoordinateFormProps {
    updateLocation:(location:Location)=>void
    coordinates:Coordinates,
    modalHandler:(show:boolean)=>void
}