import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-redux-main1-1cd6e-default-rtdb.asia-southeast1.firebasedatabase.app',
})

export default instance
