
import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://trackingtrip-server.onrender.com/'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;