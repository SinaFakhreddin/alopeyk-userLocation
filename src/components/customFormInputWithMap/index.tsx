import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {ErrorMessage, Field} from "formik";
import MapComponent from "../mapComponent";
import {MapContainer, Marker, Popup, TileLayer, useMapEvents} from "react-leaflet";
import {LocationMarker} from "./LocationMarker";
import {DraggableMarker} from "./DragableMarker";
import {useAppStore} from "../../store/locationStore";
import {shallow} from "zustand/shallow";

type CustomFormInputWithMapProps = {
    name:string
    labelClassname:string
    label:string
    type:string
    autoComplete:boolean
    errorClassName:string
}


const CustomFormInputWithMap = ({autoComplete,label,labelClassname,errorClassName,name,type}:CustomFormInputWithMapProps) => {

    return (
       <>
           <label htmlFor={name} className={`block text-sm font-medium text-gray-700 ${labelClassname}`}>
               {label}
           </label>
           <div className="mt-1 relative">
               <Field className={'invisible absolute inset-0'}  id={name} name={name} type={type} autoComplete={autoComplete} required
               />
               <div className={'flex items-center justify-center border'}>
                   <MapContainer
                       style={{height:"150px"}}
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
               </div>
               <ErrorMessage name={name}  component={"div"} className={`${errorClassName}`}/>
           </div>
       </>
    );
};

export default CustomFormInputWithMap;
