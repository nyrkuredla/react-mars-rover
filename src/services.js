import axios from 'axios';

export function fetchRoverImage(url) {
  return axios.get(url)
}
