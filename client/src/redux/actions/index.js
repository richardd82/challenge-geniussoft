import axios from "axios";
const { REACT_APP_URL_BACK } = process.env;
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ALL_SUBJECTS = "GET_ALL_SUBJECTS";
export const GET_ALL_SCHEDULES = "GET_ALL_SCHEDULES";
export const GET_ALL_PRICES = "GET_ALL_PRICES";
export const ORDER_BY_SUBJECT = "ORDER_BY_SUBJECT";
export const ORDER_BY_SCHEDULE = "ORDER_BY_SCHEDULE";
export const ORDER_BY_HOUR = "ORDER_BY_HOUR";
export const GET_ALL_DAYS = "GET_ALL_DAYS";
export const ORDER_BY_DAY = "ORDER_BY_DAY";

export function getAllUsers() {
  return async function (dispatch) {
    try {
      var json = await axios.get(`${REACT_APP_URL_BACK}/users`);
      // console.log(json)
      return dispatch({
        type: GET_ALL_USERS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getAllSubjects() {
  return async function (dispatch) {
    try {
      var json = await axios.get(`${REACT_APP_URL_BACK}/subjects`);
      // console.log(json)
      return dispatch({
        type: GET_ALL_SUBJECTS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getAllSchedules() {
  return async function (dispatch) {
    try {
      var json = await axios.get(`${REACT_APP_URL_BACK}/schedules`);
      // console.log(json)
      return dispatch({
        type: GET_ALL_SCHEDULES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getAllPrices() {
  return async function (dispatch) {
    try {
      var json = await axios.get(`${REACT_APP_URL_BACK}/prices`);
      // console.log(json)
      return dispatch({
        type: GET_ALL_PRICES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getAllDays() {
  return async function (dispatch) {
    try {
      var json = await axios.get(`${REACT_APP_URL_BACK}/days`);
      // console.log(json)
      return dispatch({
        type: GET_ALL_DAYS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function orderBySubject(payload) {
  return {
    type: ORDER_BY_SUBJECT,
    payload,
  };
}
export function orderBySchedule(payload) {
  return {
    type: ORDER_BY_SCHEDULE,
    payload,
  };
}
export function orderByHour(payload) {
  return {
    type: ORDER_BY_HOUR,
    payload,
  };
}
export function orderByDay(payload) {
  return {
    type: ORDER_BY_DAY,
    payload,
  };
}
export function register(payload) {
  console.log(payload);
  return async function(){
    try {
      const json = await axios.post(`${REACT_APP_URL_BACK}/users`, payload);
      // console.log(json, "JJJJSSSSSOOOONNNN")
      return json
      
    } catch (error) {
      console.log(error)
    }
}
}
