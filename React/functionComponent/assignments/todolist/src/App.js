// import TodoList from './components/TodoList';
import './App.css';
import TodoList2 from './components/List';
import Input from './components/Input';
import React, {useState, useRef} from 'react';

// function App() {
//   return (
//     <div className="App">
//       <TodoList/>
//     </div>
//   );
// }
//Only use the state only on the parenting file, limit control of the component of state. whe multiple components need to access the state, then lift the state. Dont go too far.
/*

questions:
  what does annoymous call back function do and when is needed?


  the [] after the useEffect,
    function only re-render when the element inside the [] changes? 

  useRef(null); why set it to null

*/

function App(){
  const [list, setList] = useState([])
  const inputRef = useRef(null)

  const addList = (e, input) =>{
    e.preventDefault();
    //form has a reset method
    //form has submit method
    //look into different methods.
    e.target.reset();
    // inputRef.current.value='';
    const newList = [...list];
    const item = {
      content:input,
      isCheck:false
    }
    newList.push(item)
    setList(newList);
  }

  const checkItem = (e, index) =>{
    const newList = [...list];
    newList[index].isCheck = e.target.checked;
    setList(newList);
  }

  const removeItem = (e, index) =>{
    console.log('REMOVE!')
    const newList = [...list];
    newList.splice(index,1);
    setList(newList);
  }


  return(
    <div className='App'>
    <Input addList ={addList} inputRef={inputRef}/>

    <TodoList2 list ={list} removeItem={removeItem} checkItem={checkItem} />
    </div>
  )
}




export default App;
