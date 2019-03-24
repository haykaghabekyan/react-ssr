import axios from 'axios';
import { configs } from '../../../../server/utils/config';

export class HomeService {
    static get() {
        const { frontend } = configs();

        return axios.get(`${ frontend.url }/api/home`)
            .then(response => response.data);
    }
}
