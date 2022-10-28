import React, { useState } from "react";

const TodoList2 = (props) => {
    const { list, checkItem, removeItem } = props

    // const checkItem = (e, index) =>{
    //     const newList = [...list];
    //     newList[index].isCheck = e.target.checked;
    //     setList(newList);
    // }

    // const removeItem = (e, index) =>{
    //     console.log('REMOVE!')
    //     const newList = [...list];
    //     newList.splice(index,1);
    //     setList(newList);
    // }

    return (
        <>
        {list.map((item, index) => 
            <div key={index}>
                {item.content} 
                <input type='checkbox' checked={item.isCheck} onChange={e=>checkItem(e, index)}/>
                <button onClick={(e)=>{removeItem(e, index)}}>Delete</button>
            </div>
        )}
        </>
    )
}

export default TodoList2;