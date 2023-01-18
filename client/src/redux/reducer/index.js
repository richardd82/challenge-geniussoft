import { GET_ALL_USERS } from "../actions"

const initialState = {
    users: [],
    subjects: [],
    Schedules: [],
    Prices: []
}
let state=[];
const rootReducer = (state = initialState, (type, payload) =>{
    switch(type){
        case GET_ALL_USERS:
            return{
                ...state,
                users: payload
            }
            default:
                    return state;
                
    }


})
export default rootReducer;