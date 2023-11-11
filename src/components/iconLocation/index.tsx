import React from 'react';
import currentLocation from "./../../assets/currentLocation.svg"
import {useAppStore} from "../../store/locationStore";
import {shallow} from "zustand/shallow";


const IconLocation = () => {

    const {modalHandler} = useAppStore((store)=>({
        modalHandler:store.modalHandler
    }),shallow)

    return (
        <div onClick={(e)=> {
            e.stopPropagation()
            modalHandler(true)
        }} className={'z-[10] w-[5%] transition-transform absolute top-[2rem] rounded-full hover:scale-125 cursor-pointer right-[1rem] bg-green-400 flex justify-center items-center p-[.5rem]'}>
            <img className={'w-full'} src={currentLocation} alt=""/>
        </div>
    );
};

export default IconLocation;
