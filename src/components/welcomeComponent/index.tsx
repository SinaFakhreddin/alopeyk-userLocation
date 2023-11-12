import React from 'react';

type Props = {
    setWelcomeModalShow:(show:boolean)=>void
}

const WelcomeComponent = ({setWelcomeModalShow}:Props) => {
    return (
        <div className={'flex flex-col gap-4  justify-center px-4'}>
            <span>This application uses Firebase, turn on your VPN for better performance. </span>
            <button onClick={()=>setWelcomeModalShow(false)} className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700  sm:w-auto">
            Ok
            </button>
        </div>
    );
};

export default WelcomeComponent;
