import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';
import Header from './components/Header';
import RoomList from './components/RoomList';
import Form from './components/Form';
import Chat from './components/Chat';

function App() {
  const [nameState, setNameState] = useState("");
  const [socket] = useState(io(":8000"))
  const [rooms, setRooms] = useState([])
  const [selectedRoom, setSelectedRoom] = useState(0)
  useEffect(() => {
    // localStorage.clear()
    console.log(localStorage.getItem('user'), localStorage.getItem('userid'))
    socket.emit('connected', localStorage.getItem('userid'));
    socket.on('updateMessages', (data) => {
      setRooms([...data.data])
    })
    socket.on('issuedId', (data) => {
      localStorage.setItem('userid', data.userid)
      console.log(localStorage.getItem('userid'))
    })
    if (localStorage.getItem('user')) {
      setNameState(localStorage.getItem('user'))
    } else {

    }
  }, [])
  const sendMessage = (obj) => {
    socket.emit('sendMessage',obj)
  }
  const joinRoom = (index) => {
    socket.emit('joinedRoom',{roomId:index, name:localStorage.getItem('user')})
  }
  return (
    <div className="App">
      <Header />
      {
        nameState.length > 0 ?
          <div>
            <RoomList rooms={rooms} selectors={{selectedRoom, setSelectedRoom}} joinFunction = {joinRoom}/>
            {rooms.length > 0 ? <Chat room={rooms[selectedRoom]} sendFunction={sendMessage}/>:null}
          </div>
          : 
          <Form setters={{nameState, setNameState}}/>
      }

    </div>
  );
}

export default App;
