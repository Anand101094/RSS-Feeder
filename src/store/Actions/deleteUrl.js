import React from 'react'

const deleteUrl = (newurls) => {
    return{
        type:'DELETE_URL',
        newurls:newurls
    }
}

export default deleteUrl