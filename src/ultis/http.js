import axios from "axios"

export const httpClient = axios.create({
    baseURL: "https://api01.f8team.dev/api",
})

const get = async (path, config) => {
    const response = await httpClient.get(path, config)
    return response.data
}

const post = async (path, data, config) => {
    const response = await httpClient.post(path, data, config)
    return response.data
}

const put = async (path, data, config) => {
    const response = await httpClient.put(path, data, config)
    return response.data
}

const patch = async (path, data, config) => {
    const response = await httpClient.put(path, data, config)
    return response.data
}

const del = async (patch, config) => {
    const response = await httpClient.delete(patch, config)
    return response.data
}

const http = { get, post, put, patch, del }

export default http
