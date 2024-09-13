import {API_KEY} from './constants/constants'
let n = Math.floor(Math.random() * 11)
export const originals = `movie/now_playing?api_key=${API_KEY}&language=en-US&page=${n}`
export const action = `/discover/movie?api_key=${API_KEY}&with_genres=28`
export const trial = `/discover/tv?api_key=${API_KEY}`
export const mm = `movie/now_playing?api_key=${API_KEY}&language=en-US&page=${n}'`
export const helo = `movie/popular?api_key=${API_KEY}&language=en-US&page=${n}'`




