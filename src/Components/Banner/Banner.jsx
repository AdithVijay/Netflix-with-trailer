import React,{useEffect, useState} from "react";
import {API_KEY,imageUrl} from '../../constants/constants'
import './Banner.css'
import axios from "../../axios";

function Banner() {

    const [movie,setMovie] = useState(null)
    let n = Math.floor(Math.random() * 19)
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setMovie(response.data.results[n])
            console.log(response.data.results[0]);
        })
    },[])

console.log(movie)
  return <div 
   style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:" "})`}}
   className="banner">
    <div className="content">
        <h1 classNa me="title">{movie?.name || movie?.title || "Movie Name"} </h1>
        <div className="banner_buttons">
            <button className="button">Play</button>
            <button className="button">My list</button>
        </div>
        <h1 className="description">{movie? movie.overview:"a"}</h1>
    </div>
    <div className="fade_bottom">  </div>


  </div>
  
}

export default Banner;
