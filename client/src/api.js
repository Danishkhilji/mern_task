import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:4000',
    withCredentials: true,
        credentials: 'include',
});