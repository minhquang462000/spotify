import axios from "axios";
import { cookies } from "next/headers";



const API_URL = process.env.API_URL || "http://localhost:3000/api/client";
const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

axiosInstance.interceptors.response.use(((req) =>{
    req.headers.Authorization =`Bearer ${cookies().get('x-access-token')?.value}`
    return req
})
);
export default axiosInstance