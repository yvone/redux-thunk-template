import axiosDefault/* , { AxiosRequestConfig } */ from 'axios';

const config/* : AxiosRequestConfig */ = {
    headers: {
        'Content-Type': 'application/json',
    },
};

const baseURL = process.env.REACT_APP_API_URL/*  as string */;

const axios = axiosDefault.create({
    ...config,
    baseURL,
});

export { axios };
/* export type { AxiosResponse } from 'axios'; */
