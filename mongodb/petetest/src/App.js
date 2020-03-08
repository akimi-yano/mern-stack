import React,{useState, useEffect} from 'react';
import io from 'socket.io-client';
import './App.css';

function App() {
  const [socket] = useState(io(':8000'))
  const [state, setState] = useState([])
  const [formState, setFormState] = useState({
    message: ""
  })
  const onChangeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.name]:e.target.value
    })
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    socket.emit("sentMessage", formState)
    setFormState({
      message:""
    })
  }
  useEffect(() => {
    socket.on("updatedMessage", (data) => {
      console.log(data.data)
      setState([...data.data])
    })
  }, [])

  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <input type="text" name="message" value={formState.message} onChange={onChangeHandler}/>
        <button type="submit">Submit Message</button>
      </form>
      {
        state.map((item, index) => (
          <p key={index}>{item}</p>
        ))
      }
    </div>
  );
}

export default App;
