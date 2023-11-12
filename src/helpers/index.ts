export const convertedDataFromDB = (snapshot:[])=>{
    return new Promise((resolve,reject) => {
        const locations= []
        snapshot?.forEach((doc) => locations.push(doc.data())
        // {
        //     const geoPoint = doc.data().locationOnMap;
        //     const convertedLocation = {
        //         locationName : doc.data().locationName,
        //         locationType:doc.data().locationType,
        //         locationOnMap:[geoPoint.longitude ,geoPoint.latitude],
        //         logo:doc.data().logo,
        //         id:doc.id
        //     }
        //     console.log("converted",convertedLocation)
        //     locations.push( convertedLocation)
        // }

        )

        resolve(locations)
    } )
}