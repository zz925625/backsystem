let axios = require('axios')
// import axios from 'axiox'

export let get = function (url, params) {
  return axios.get(url, { params })
}
export let post = function (url, params) {
  return axios.post(url, params)
}