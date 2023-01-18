import { GET_ALL_SUBJECTS, GET_ALL_USERS, ORDER_BY_SUBJECT } from "../actions"

const initialState = {
    users: [],
    usersBak: [],
    subjects: [],
    subjectsBak: [],
    Schedules: [],
    Prices: []
}
const rootReducer = (state = initialState, action) =>{
    // console.log(action.type, "REDUCEEEER")
    switch(action.type){
        case GET_ALL_USERS:
            return{                
                ...state,
                users: [...action.payload],
                usersBak: [...action.payload]
                
            }
            case GET_ALL_SUBJECTS:
                return{
                    ...state,
                    subjects: [...action.payload],
                    subjectsBak: [...action.payload]
                }
        case ORDER_BY_SUBJECT:
            const allUsers = state.users;
            console.log(allUsers, "Reduceeeer")
            return{

            }
            default:
                    return state;
                
    }


}
export default rootReducer;