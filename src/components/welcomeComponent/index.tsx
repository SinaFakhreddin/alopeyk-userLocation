import React from 'react';
import {NOTE_1, NOTE_2} from "../../constants";

type Props = {
    setWelcomeModalShow:(show:boolean)=>void
}

const WelcomeComponent = ({setWelcomeModalShow}:Props) => {
    return (
        <div className={'flex flex-col gap-4  justify-center px-4'}>
            <span>{NOTE_1} </span>
            <span>{NOTE_2}</span>
            <button onClick={()=>setWelcomeModalShow(false)} className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700  sm:w-auto">
            Ok
            </button>
        </div>
    );
};

export default WelcomeComponent;
