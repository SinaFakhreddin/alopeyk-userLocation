import React from 'react';
import {withFormik} from "formik";
import UserCoordinateFormTemplate from "./UserCoordinateFormTemplate";
import {userCoordinateFormSchema} from "../../schemas";
import {Coordinates, Location} from "../../types";





interface CoordinateFormProps {
    updateLocation:(location:Location)=>void
    coordinates:Coordinates,
    modalHandler:(show:boolean)=>void
}

const UserCoordinateFormLogic = withFormik<CoordinateFormProps, Location>({

    mapPropsToValues:(props)=>{
        console.log("props",props)
        return {
            locationName:"",
            locationOnMap:props.coordinates,
            locationType:"",
            logo:""
        }
    },
    handleSubmit:async (values,{props}) => {
        props.updateLocation({
            locationName: values.locationName,
            locationOnMap:props.coordinates,
            locationType :values.locationType,
            logo:values.logo,
        })
        props.modalHandler(false)
    },
    validationSchema : userCoordinateFormSchema
})(UserCoordinateFormTemplate)


export default UserCoordinateFormLogic;

