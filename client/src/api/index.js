import request from "./config";

const urlApi = {
  login: "http://localhost:3000/api/auth/login",
};

export function authentication(DATA) {
  return request.postRequest(urlApi.login, DATA);
}

export function getListTask(url) {
  return request.getRequest(url);
}

export function getOneTask(params) {
  // console.log('URL: ', url , 'PARAMS: ', params)
  return request.getRequest(`/${params}`, params);
}

export function postTask(data, url) {
  console.log("!!!!!!!!!!!!!", data);
  return request.postRequest(url, data);
}

export function putTask(data, params) {
  console.log("DATA", data);
  console.log("PARAMS: ", params);
  return request.putRequest(`/${params}`, data);
}

export function deleteTask(id) {
  return request.deleteRequest(id);
}
