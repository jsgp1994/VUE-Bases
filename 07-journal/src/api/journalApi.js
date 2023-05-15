import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-demos-d6365-default-rtdb.firebaseio.com'
})


export default journalApi