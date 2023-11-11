import React from 'react';
import {Form , Field} from "formik";
import CustomFormInput from "../customFormInput";
import CustomFormInputWithMap from "../customFormInputWithMap";

const UserCoordinateFormTemplate = () => {
    return (
        <Form >
            <div >
                <CustomFormInput name={"locationName"} label={"Location Name:"} errorClassName={'text-red-500 text-xs'}/>
            </div>
            <div >
                <CustomFormInputWithMap name={"locationOnMap"} label={"Location On Map:"} errorClassName={'text-red-500 text-xs'}/>
            </div>
            <div >
                <CustomFormInput name={"locationType"} label={"Location Type:"} errorClassName={'text-red-500 text-xs'}/>
            </div>
            <div >
                <CustomFormInput name={"logo"} label={"Logo:"} errorClassName={'text-red-500 text-xs'}/>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto">Get My Current Location
                </button>
                {/*<button*/}
                {/*    onClick={()=>modalHandler(false)}*/}
                {/*    type="button"*/}
                {/*    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 sm:mt-0 sm:w-auto">Cancel*/}
                {/*</button>*/}
            </div>
        </Form>
    );
};

export default UserCoordinateFormTemplate;
