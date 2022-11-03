import {executeApiCall} from "./api";

const baseURL = "/owners"

export function ownerLogin(content) {

    return executeApiCall(baseURL+"/login", "POST", content)

    // return {
    //     id:19,
    //     role:"owner"
    // };
}

export function ownerRegister(content){

}