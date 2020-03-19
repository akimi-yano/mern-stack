import React,{useState} from 'react';
import './App.css';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet'
import useSwr from 'swr'

// import {Icon} from 'leaflet'

const fetcher = (...args)=>fetch(...args).then(response=>response.json())
function App() {

  const url="http://data.police.uk/api/crimes-street/all-crime?lat=52.6297&lng=-1.131592&date=2019-10";
  const {data, error}=useSwr(url,{fetcher})
  const crimes = (data && !error)? data.slice(0,100) : []
  
  const [activeMarker, setActiveMarker]=useState(null)


return (
    <div className="App">
      
      <Map center={[52.6376, -1.135171]} zoom={15}>
      <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>contributors'
      />
      
      {crimes.map(crime =>(
      <Marker 
      key={crime.id} 
      position={[crime.location.latitude, crime.location.longitude]}
      onClick={()=>{
        setActiveMarker(crime)
      }}
      />
      ))}
      {activeMarker &&(
        <Popup
        position={[
          activeMarker.location.latitude, 
          activeMarker.location.longitude
        ]}
        onClose={()=>{
          setActiveMarker(null)
        }}
        >
          <h2>Category: {activeMarker.category}</h2>
      <p>Street: {activeMarker.location.street.name}</p>
        </Popup>
      )}
      </Map>
    </div>
  );
}

export default App;
