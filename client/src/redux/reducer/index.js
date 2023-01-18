import { GET_ALL_USERS } from "../actions"

const initialState = {
    users: [],
    subjects: [],
    Schedules: [],
    Prices: []
}
let state=[];
const rootReducer = (state = initialState, action) =>{
    // console.log(action.type, "REDUCEEEER")
    switch(action.type){
        case GET_ALL_USERS:
            return{                
                ...state,
                users: action.payload
            }
            default:
                    return state;
                
    }


}
export default rootReducer;