import React, { useState } from 'react'

const TodoList = () => {
    const [inputs, setInputs] = useState('');
    const [list, setList] = useState([]);

    const addList = (e) =>{
        e.preventDefault();
        const newList = [...list];
        const item = {
            content:inputs,
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

    const createInput = (e) =>{
        setInputs(e.target.value);
    }
    return (
        <div>
            <form onSubmit={e=>addList(e)}>
                <input onChange={ e => createInput(e)}/>
                <input type='submit'/>
            </form>
            {/* ========================================================================= */}
            {list.map((item, index) => 
                <div key={index}>
                    {item.content} 
                    <input type='checkbox' checked={item.isCheck} onChange={e=>checkItem(e, index)}/>
                    <button onClick={(e)=>{removeItem(e, index)}}>Delete</button>
                </div>
            )}
        </div>
    );
}

export default TodoList;