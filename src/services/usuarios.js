import axios from 'axios'
const baseUrl = 'http://localhost:3000/api/usuarios'

const login = newObject => {
    const request = axios.post(`${baseUrl}/login`, newObject)
    return request.then(response => response.data)
}

const signup = newObject => {
    const request = axios.post(`${baseUrl}/signup`, newObject)
    return request.then(response => response.data)
}

const explore = newObject => {
    const request = axios.get(`${baseUrl}/explore`)
    return request.then(response => response.data)
}



export default { login, signup, explore }