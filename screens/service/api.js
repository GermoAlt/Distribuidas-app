
const baseURL = "https://morfando-back.herokuapp.com"
const apiURL = "/morfando/v1"

export function executeApiCall(endpoint, method, content) {
    if(method !== "GET") {
        return fetch(baseURL + apiURL + endpoint, {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(content)
        })
    } else {
        return fetch(baseURL + apiURL + endpoint, {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
}