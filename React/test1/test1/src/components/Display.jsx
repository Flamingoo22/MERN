import React from 'react'


const Display = (props) => {
    return (
        <fieldset>
            <legend>Display</legend>
            {
                props.animals.map((animal,indx)=>{
                    return(
                        <div key={indx} onClick={()=>{console.log({indx})}}>
                            <li>{animal}</li>
                            <hr/>
                        </div>
                    ) 
                })
            }
        </fieldset>
    )
}

export default Display