
import axios from 'axios';

export default axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers: {
        'user-key': '5da17e64ca3931cc962de699d11dd82e'
    }
}
);
