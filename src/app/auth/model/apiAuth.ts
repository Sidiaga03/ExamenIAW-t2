import { SdagILogin, SdagIRespLogin } from '../../../interfaces/SdagILogin';
import axios from 'axios';

const apiBD = 'http://192.168.8.88:3001/api/auth';

const apiAuth = {

    login: async (login:SdagILogin): Promise<SdagIRespLogin> => {
        const ruta = `${apiBD}/auth/login`;
        const {data} = await axios.post(`${ruta}`, login) 
        return data
    }
}

export default apiAuth;