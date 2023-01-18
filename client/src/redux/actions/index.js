import axios from "axios";
// require('dotenv').config();
const { REACT_APP_URL_BACK } = process.env;
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ALL_SUBJECTS = "GET_ALL_SUBJECTS";
export const GET_ALL_SCHEDULES = "GET_ALL_SCHEDULES";
export const GET_ALL_PRICES = "GET_ALL_PRICES";
export const ORDER_BY_SUBJECT = "ORDER_BY_SUBJECT";
export const ORDER_BY_SCHEDULE = "ORDER_BY_SCHEDULE";
export const ORDER_BY_HOUR = "ORDER_BY_HOUR";

export function getAllUsers() {
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/users`);
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
      var json = await axios.get(`http://localhost:3001/subjects`);
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
      var json = await axios.get(`http://localhost:3001/schedules`);
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
      var json = await axios.get(`http://localhost:3001/prices`);
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