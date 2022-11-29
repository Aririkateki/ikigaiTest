import axios from "axios";
import {getAxiosServer} from "./api";


export const RegisterApi = (user, callback) => {
    getAxiosServer().post("/Register", user)
        .then(response => {
            console.log(response)
            const data = response.data;
            callback(true, data)
        }).catch(error => {
        console.log(error)
        callback(false, error.response.data.messages)
    })
}

