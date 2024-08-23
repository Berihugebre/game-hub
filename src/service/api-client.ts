
import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a482ddf3c4854362b9f3e61f8e4899e9'
    }
})