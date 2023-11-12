import React from 'react';
import {ErrorMessage, Field} from "formik";


type CustomSelectBoxFormProps = {
    label:string
    name:string
    type:string
    labelClassname:string
    autoComplete:boolean
    errorClassName:string
    fieldClassname:string
}


const CustomSelectBoxForm = ({autoComplete,fieldClassname,labelClassname,label,errorClassName,name,type}:CustomSelectBoxFormProps) => {
    return (
            <>
                <label htmlFor={name} className={`block text-sm font-medium text-gray-700 ${labelClassname}`}>
                    {label}
                </label>
                <div className="mt-1 ">
                    <Field  as={'select'} id={name} name={name} type={type} autoComplete={autoComplete} required
                            className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${fieldClassname}`}>
                        <option value="Busines">Busines</option>
                        <option value="Home">Home</option>
                        <option value="Gym">Gym</option>

                    </Field>
                    <ErrorMessage name={name}  component={"div"} className={`${errorClassName}`}/>
                </div>
            </>
    );
};

export default CustomSelectBoxForm;
