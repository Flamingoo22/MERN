import io from 'socket.io-client'
import './App.css';
import React, { useEffect, useState } from 'react'

function App() {

  // use socket from io;
  const [socket] = useState(()=> io(':8000'));
  const [input, setInput] = useState('')

  const [messages, setMessages] = useState([])

  useEffect(() =>{

    //listen from server
    socket.on('post chat', (msg)=>{
      console.log(msg)
      // setMessages([...messages, msg])
      setMessages((prevMessage) => {
        return [...prevMessage, msg]
      })
    })

    return () => socket.disconnect(true)
  },[socket])


  const onChangeHandler = e =>{
    setInput(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault();

    // send stuff to the server.
    socket.emit('unique string', input)
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello socket.io</h1>


      {/* {JSON.stringify(messages)} */}
      {
        // messages.map((message, i)=>{
        //   return (
        //     <div key={i}>{message}</div>
        //   )
        // })
        messages.map((item, i)=>{
          return (
            <img key={i} src={item} width='250'/>
          )
        })
      }
      <form onSubmit={submitHandler}>
        <input onChange={onChangeHandler} value={input} autoComplete='off'/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
