import React, { useState } from 'react';
import Map from "./components/Map"
import Chat from "./components/Chat"
import './App.css';
import { Router } from "@reach/router"
import Transition from "./components/Transition"
// import {Map, Marker, Popup, TileLayer} from 'react-leaflet'
// import useSwr from 'swr'

// import {Icon} from 'leaflet'

// const fetcher = (...args)=>fetch(...args).then(response=>response.json())
function App(props) {
  // const mapboxgl.accessToken = acessToken;
  // accessToken="pk.eyJ1IjoiYWtpaGltZSIsImEiOiJjazd1Mm9qZzIwMDkyM2dwazkxaDZjbjlxIn0.5xQ0TX_wKsyku4JjE7i8RQ"

  // const url="http://data.police.uk/api/crimes-street/all-crime?lat=52.6297&lng=-1.131592&date=2019-10";
  // const {data, error}=useSwr(url,{fetcher})
  // const crimes = (data && !error)? data.slice(0,100) : []

  // const [activeMarker, setActiveMarker]=useState(null)


  return (
    <div>

      <Map />
      <Router>

        <Transition path="/transition/:country" />

        <Chat path="test/:country" />
      </Router>
    </div>
  );
}

export default App;