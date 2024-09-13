import './App.css'
import React from "react";
import Navbar from './Components/Navbar/Navbar';
import {action,originals,trial,mm,helo} from './urls'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import Footer from './Footer';


function App() {
  let n = ["Netflix Originals","Actions","Scifi","Latests","Romance","Thrillers","Your Next Watch","South Indian Cinema","Internatinal Tv Shows"]
  let count = n.length
  let v =  Math.floor(Math.random() * count)
  let movies = n[v]
  return (
    <>
    
    <Navbar/>
    <Banner/>
    <RowPost url={originals} title={movies}/>
    <RowPost url={action} title="Netflix Originals" isSmall/>   
    <RowPost url={trial} title="Latests"isSmall/>  
    <RowPost url={mm} title='Fresh Releases' isSmall/> 
    <RowPost url={helo} title="Thrillers" isSmall/> 
    <Footer/>
    </>
  )
}

export default App;
