import {executeApiCall} from "./api";

const baseURL = "/owners"

export function ownerLogin(content) {
    return executeApiCall(baseURL+"/login", "POST", content)
}

export function ownerRegister(content){
    return executeApiCall(baseURL + "/register", "POST", content)
}