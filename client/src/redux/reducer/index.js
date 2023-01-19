import {
  GET_ALL_PRICES,
  GET_ALL_SCHEDULES,
  GET_ALL_SUBJECTS,
  GET_ALL_USERS,
  ORDER_BY_SCHEDULE,
  ORDER_BY_SUBJECT,
  ORDER_BY_HOUR,
  GET_ALL_DAYS,
  ORDER_BY_DAY
} from "../actions";

const initialState = {
  users: [],
  usersBak: [],
  subjects: [],
  subjectsBak: [],
  schedules: [],
  schedulesBak: [],
  prices: [],
  pricesBak: [],
  days: [],
  daysBak: []
};
const rootReducer = (state = initialState, action) => {
  // console.log(action.type, "REDUCEEEER")
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: [...action.payload],
        usersBak: [...action.payload],
      };
    case GET_ALL_SUBJECTS:
      return {
        ...state,
        subjects: [...action.payload],
        subjectsBak: [...action.payload],
      };
    case GET_ALL_SCHEDULES:
      return {
        ...state,
        schedules: [...action.payload],
        schedulesBak: [...action.payload],
      };
    case GET_ALL_PRICES:
      return {
        ...state,
        prices: [...action.payload],
        pricesBak: [...action.payload],
      };
    case GET_ALL_DAYS:
      return {
        ...state,
        days: [...action.payload],
        daysBak: [...action.payload],
      };
    case ORDER_BY_SUBJECT:
      return {
        ...state,
        users: state.usersBak.filter(
          (e) => e.subject.subject === action.payload
        ),
      };
    case ORDER_BY_SCHEDULE:
      return {
        ...state,
        users: state.usersBak.filter((e) => e.schedule.day === action.payload),
      };
    case ORDER_BY_HOUR:
      return {
        ...state,
        users: state.usersBak.filter((e) => e.schedule.from === action.payload),
      };
    case ORDER_BY_DAY:
      return {
        ...state,
        users: state.usersBak.filter((e) => e.day.day === action.payload),
      };

    default:
      return state;
  }
};
export default rootReducer;
