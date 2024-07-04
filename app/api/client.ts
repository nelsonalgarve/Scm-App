import axios from 'axios';

const baseURL = 'http://192.168.1.183:8000';

const client = axios.create({ baseURL });

export default client;
