import React, {ReactElement, ReactNode, useEffect} from 'react';
import ReactDOM from 'react-dom';
/*
import location  from "./../../assets/location.svg"
*/
import {useAppStore} from "../../store/locationStore";
import {shallow} from "zustand/shallow";
import {useRef} from "react";


type ModalComponentProps = {
    modalTitle:ReactNode,
    icon:ReactElement,
    modalBody:ReactNode,
    onHideModal:()=>void

}



const ModalComponent = ({icon,modalTitle , modalBody}:ModalComponentProps) => {
    const {modalHandler,showModal} = useAppStore((store)=>({
        modalHandler:store.modalHandler,
        showModal:store.modal.showModal
    }),shallow)
    const modalBodyRef = useRef<HTMLDivElement | null>(null);



    const handlerOutSideClick= (e:MouseEvent)=>{
        console.log("ee",modalBodyRef.current?.contains(e.target))
        if (modalBodyRef?.current && !modalBodyRef.current?.contains(e.target)){
            modalHandler(false)
        }
    }


    useEffect(() => {
        document.addEventListener("click",handlerOutSideClick)
        return () => {
            document.addEventListener('click',handlerOutSideClick)
        };
    }, []);




    return ReactDOM.createPortal(
        <div className="relative  z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div  className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div
                        ref={modalBodyRef}
                        className="relative  transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="flex items-center font-semibold sm:flex sm:items-start">
                                <div
                                    className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    {icon}
                                </div>
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    {modalTitle}
                                </div>
                            </div>
                        </div>
                        <div className="bg-white px-4 sm:p-6 sm:pb-4">
                            {modalBody}
                        </div>

                    </div>
                </div>
            </div>
    </div>
        ,document.getElementById("modal")
    );
};

export default ModalComponent;

