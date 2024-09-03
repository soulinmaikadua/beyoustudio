import axios from "axios";

export const useAPI = () => {
    const baseUrl = "https://soulinmaikadua.github.io/beyou/eps-topik";

    return axios.create({
        baseURL: baseUrl,
    });
};
