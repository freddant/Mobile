import axios from 'axios'

const axiosConfig = axios.create({baseURL: 'https://rickandmortyapi.com/api/'})

export default axiosConfig