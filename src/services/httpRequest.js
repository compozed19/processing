import axios from 'axios';
import { ROOT_URL } from "./appConfig";

/**
* action for http request for login
* @param {*} config
*/
export function doLoginPost(config) {
    if (config) {
        return axios({
            url: `${ROOT_URL}/` + config.url,
            method: 'POST',
            data: config.data
        });
    }
}

/**
* action for http request for post
* @param {*} config
*/
export function doActionPost(config) {
    if (config) {
        return axios({
            url: `${ROOT_URL}/` + config.url,
            method: 'POST',
            data: config.data
        });
    }
}

/**
* action for http request for get
* @param {*} config
*/
export function doActionGet(config) {
    if (config) {
        return axios({
            url: `${ROOT_URL}/` + config.url,
            method: 'GET'
        });
    }
}

/**
* action for http request for delete
* @param {*} config
*/
export function doActionDelete(config) {
    if (config) {
        return axios({
            url: `${ROOT_URL}/` + config.url,
            method: 'DELETE',
            data: config.data
        });
    }
}