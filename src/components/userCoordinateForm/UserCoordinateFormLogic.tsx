import React from 'react';
import {withFormik} from "formik";
import UserCoordinateFormTemplate from "./UserCoordinateFormTemplate";
import {userCoordinateFormSchema} from "../../schemas";
import {Coordinates, Location} from "../../types";
import fire from "../../api/config";
import {toast} from "react-toastify";





interface CoordinateFormProps {
    updateLocation:(location:Location)=>void
    coordinates:Coordinates,
    modalHandler:(show:boolean)=>void
}

const UserCoordinateFormLogic = withFormik<CoordinateFormProps, Location>({

    mapPropsToValues:(props)=>{
        return {
            locationName:"",
            locationOnMap:props.coordinates,
            locationType:"",
            logo:""
        }
    },
    handleSubmit:async (values,{props}) => {
        const fileData =  event?.target[3]?.files[0]
        const userLocation = {
            locationName:values?.locationName,
            locationOnMap:[props.coordinates.locationOnMap.lat , props.coordinates.locationOnMap.lng],
            locationType:values?.locationType,
            logo:"",
            id:""
        }
        const uploadUserLogoLocation = fire.storage().ref(`/userLocationsLogo`)
        const uploadUserLogoLocationTask =uploadUserLogoLocation.put(fileData)
        uploadUserLogoLocationTask.on("state_changed" , async function Progress(snapShot){
            const progress = Math.round((snapShot.bytesTransferred / snapShot.totalBytes)*100)
            props.updateProgressbar(true)
            props.updateProgressPercent(progress)
        },
        error =>{
            console.log("errorOnUploadLogo",error)
        },
            async()=>{
                const uploadedFileUrl =await uploadUserLogoLocation.getDownloadURL()
                props.updateProgressbar(false)
                const newUserLocationData = {
                    ...userLocation,
                    logo: uploadedFileUrl
                }
                fire.firestore().collection("userLocations").add(newUserLocationData).then(async (file)=>{
                    const uploadedFileId = file.id
                    const userLocationDataWithIdAndLogo = {
                        ...newUserLocationData,
                        id:uploadedFileId
                    }
                    props.updateLocation(userLocationDataWithIdAndLogo)
                     toast.success("successful")
                     props.modalHandler(false)
                })
            }


        )
        // props.updateLocation({
        //     locationName: values.locationName,
        //     locationOnMap:props.coordinates,
        //     locationType :values.locationType,
        //     logo:values.logo,
        // })
        // props.modalHandler(false)
    },
    validationSchema : userCoordinateFormSchema
})(UserCoordinateFormTemplate)


export default UserCoordinateFormLogic;

