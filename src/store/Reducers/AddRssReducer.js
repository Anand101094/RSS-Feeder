const initstate={
    url:['google.com']
}

export const AddRssReducer = (state=initstate,action) => {
    console.log('success',action)
    return state
}