const initstate={
    urls:[]
}

export const AddRssReducer = (state=initstate,action) => {
    // console.log(action,state)
        switch(action.type){
            case 'DELETE_URL':
                return {
                    ...state,
                    urls: [...action.newurls]
                }

            case 'ADD_URL':
                if (action.url.content)
                    return {
                        ...state,
                        urls: [...state.urls, action.url]
                    }
        
            default:
                return state
        }  
    return state    
}