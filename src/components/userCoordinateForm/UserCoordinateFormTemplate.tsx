import React from 'react';
import {Form } from "formik";
import CustomFormInput from "../customFormInput";
import CustomFormInputWithMap from "../customFormInputWithMap";
import CustomSelectBoxForm from "../customSelectBoxForm";

const UserCoordinateFormTemplate = (props) => {
    return (
        <Form >
            <div >
                <CustomFormInput name={"locationName"} label={"Location Name:"} errorClassName={'text-red-500 text-xs'}/>
            </div>
            <div >
                <CustomFormInputWithMap name={"locationOnMap"} label={"Location On Map:"} errorClassName={'text-red-500 text-xs'}/>
            </div>
            <div >
                <CustomSelectBoxForm name={"locationType"} label={"Location Type:"} errorClassName={'text-red-500 text-xs'}/>
            </div>
            <div >
                <CustomFormInput progressbar={props.progressbar} type={'file'} name={"logo"} label={"Logo:"} errorClassName={'text-red-500 text-xs'}/>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto">Get My Current Location
                </button>
                <button
                    onClick={()=>props.modalHandler(false)}
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Cancel
                </button>
            </div>
        </Form>
    );
};

export default UserCoordinateFormTemplate;
