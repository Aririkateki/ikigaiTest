import axios from "axios";


export const getAxiosServer=()=>{
    return axios.create(
        {
            baseURL:"http://localhost:3000/",
            headers:{
                API_KEY:"LKFDNJSDFNJDNFDFNDCFDDFSFSF"
            }
        }
    )
}