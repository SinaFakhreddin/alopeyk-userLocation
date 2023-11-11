import * as Yup from "yup"


export const userCoordinateFormSchema = Yup.object({
    locationName:Yup.string().required().min(2).max(666666),
    locationOnMap:Yup.object().required(),
    locationType:Yup.string().required(),
    logo:Yup.string().required()
})