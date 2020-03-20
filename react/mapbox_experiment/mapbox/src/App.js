import React,{useState} from 'react';
import './App.css';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet'
import mapboxgl from 'mapbox-gl';
// import useSwr from 'swr'

// import {Icon} from 'leaflet'

// const fetcher = (...args)=>fetch(...args).then(response=>response.json())
function App() {
// const mapboxgl.accessToken = acessToken;
// accessToken="pk.eyJ1IjoiYWtpaGltZSIsImEiOiJjazd1Mm9qZzIwMDkyM2dwazkxaDZjbjlxIn0.5xQ0TX_wKsyku4JjE7i8RQ"

  // const url="http://data.police.uk/api/crimes-street/all-crime?lat=52.6297&lng=-1.131592&date=2019-10";
  // const {data, error}=useSwr(url,{fetcher})
  // const crimes = (data && !error)? data.slice(0,100) : []
  
  // const [activeMarker, setActiveMarker]=useState(null)


return (
    <div className="App">

      <Map center={[35.7128, 45.0060]} zoom={2} >
      <TileLayer
      url='https://api.mapbox.com/styles/v1/{user_name}/{style_id}/tiles/256/{z}/{x}/{y}?access_token={accessToken}'
      // url='https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token={accessToken}}'
      attribution='Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>'
      maxZoom={3}
      style_id="ck7zc036p09bw1imsbnw9ibjd"
      user_name="akihime"
      // id='mapbox://styles/mapbox/dark-v10'
      accessToken="pk.eyJ1IjoiYWtpaGltZSIsImEiOiJjazd1Mm9qZzIwMDkyM2dwazkxaDZjbjlxIn0.5xQ0TX_wKsyku4JjE7i8RQ"
      // style="mapbox://styles/mapbox/dark-v10"
      />  
      {/* https://studio.mapbox.com/styles/mapbox/streets-v10/
      mapbox://styles/mapbox/streets-v10 */}
      {/* <TileLayer
      url='https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}.{style}'
      attribution='Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>'
      maxZoom={3}
      id='mapbox://styles/mapbox/dark-v10'
      accessToken="pk.eyJ1IjoiYWtpaGltZSIsImEiOiJjazd1Mm9qZzIwMDkyM2dwazkxaDZjbjlxIn0.5xQ0TX_wKsyku4JjE7i8RQ"
      style="mapbox://styles/mapbox/dark-v10"
      />   */}
      {/* mapbox://styles/mapbox/dark-v10 */}
      {/* not working
    <TileLayer
      url='https://api.tiles.mapbox.com/styles/v1/{username}/{id}/tiles/{tileSize}/{z}/{x}/{y}?access_token={accessToken}'
      attribution= 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
  maxZoom= {18}
  username='akihime'
  id= "mapbox://styles/akihime/ck7zc036p09bw1imsbnw9ibjd"
  accessToken= "pk.eyJ1IjoiYWtpaGltZSIsImEiOiJjazd1Mm9qZzIwMDkyM2dwazkxaDZjbjlxIn0.5xQ0TX_wKsyku4JjE7i8RQ"
  tileSize= {512}
  zoomOffset= {-1}
      />   */}



      

      </Map>
    </div>
  );
}

export default App;