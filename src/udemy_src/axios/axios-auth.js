import axios from 'axios';

//不知道幹嘛用，但好像很常用
const instance = axios.create({
    baseURL: 'https://vue-axios-13cdc.firebaseio.com',
})

instance.defaults.headers.common['SOMETHING'] = 'something'
export default instance