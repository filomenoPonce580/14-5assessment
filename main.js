function getAllNames(){
    axios
        .get(BASE_URL)
        .then((response)=>{
            console.log(response.data.map((constellationObj)=>{
                return constellationObj.name}))
            return response.data.map((constellationObj)=>{
                return constellationObj.name
            })
        })
        .catch((error)=>{
            console.log(error.message)
            return error.message
        })
}


function getConstellationsByQuadrant(quadrant) {
    axios
        .get(BASE_URL)
        .then((response)=>{
            console.log(response.data.filter((constellationObj)=>{
                return constellationObj.quadrant === quadrant
            }))
            return response.data.filter((constellationObj)=>{
                return constellationObj.quadrant === quadrant
            })
        })
        .catch((error)=>{
            console.log(error.message)
            return error.message
        })
}
