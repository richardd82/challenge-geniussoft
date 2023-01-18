import axios from "axios";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ALL_SUBJECTS = "GET_ALL_SUBJECTS";
export const GET_ALL_SCHEDULES = "GET_ALL_SCHEDULES";
export const GET_ALL_PRICES = "GET_ALL_PRICES";
const { REACT_APP_URL_BACK } = process.env;

export function getAllUsers() {
  return async function (dispatch) {
    return axios
      .get(`${REACT_APP_URL_BACK}/recipes`)
      .then((response) => response)
      .then((json) => {
        dispatch({ type: GET_ALL_USERS, payload: json });
      })
      .catch((err) => {
        dispatch({ type: GET_ALL_USERS, payload: err });
      });
  };
}
export function getAllSubjects() {
  return async function (dispatch) {
    return axios
      .get(`${REACT_APP_URL_BACK}/subjects`)
      .then((response) => response)
      .then((json) => {
        dispatch({ type: GET_ALL_SUBJECTS, payload: json });
      })
      .catch((err) => {
        dispatch({ type: GET_ALL_SUBJECTS, payload: err });
      });
  };
}
export function getAllSchedules() {
  return async function (dispatch) {
    return axios
      .get(`${REACT_APP_URL_BACK}/schedules`)
      .then((response) => response)
      .then((json) => {
        dispatch({ type: GET_ALL_SCHEDULES, payload: json });
      })
      .catch((err) => {
        dispatch({ type: GET_ALL_SCHEDULES, payload: err });
      });
  };
}
export function getAllPrices() {
  return async function (dispatch) {
    return axios
      .get(`${REACT_APP_URL_BACK}/prices`)
      .then((response) => response)
      .then((json) => {
        dispatch({ type: GET_ALL_PRICES, payload: json });
      })
      .catch((err) => {
        dispatch({ type: GET_ALL_PRICES, payload: err });
      });
  };
}
