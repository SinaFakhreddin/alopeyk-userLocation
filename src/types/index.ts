export type Coordinates  = {
    lng:number | null
    lat:number | null
}

export interface Location {
    locationName: string | undefined,
    locationOnMap:Coordinates | undefined,
    locationType :string | undefined,
    logo:string | undefined,
}

export type Modal = {
    showModal:boolean,

}


export interface MyStore {
    userLocationStore : Location
    updateLocation: (location:Location)=>MyStore,
    showModal:Modal,
    modalHandler:(show:boolean)=>MyStore,
    coordinates:Coordinates,
    updateCoordinatesHandler:(coordinates:Coordinates)=>MyStore
}