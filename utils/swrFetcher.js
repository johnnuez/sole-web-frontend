import axios from 'axios'

export const swrFetcher = (url) => axios.get(url).then((res) => res.data.data)
