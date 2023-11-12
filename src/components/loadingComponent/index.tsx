import React from 'react';


type LoadingComponentProps={
    progress:number | string
}


const LoadingComponent = ({progress}:LoadingComponentProps) => {
    return (
        <div className=" w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
            <div className="bg-green-500 h-1 rounded-full dark:bg-green-500" style={{width:`${progress}%`}}></div>
        </div>
    );
};

export default LoadingComponent;
