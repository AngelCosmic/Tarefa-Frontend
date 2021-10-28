import axios from 'axios'
import dotenv from 'dotenv';

dotenv.config();
 
const api = axios.create({
    baseURL: "https://aluno-backend1.herokuapp.com/"

})
 
export default api;
