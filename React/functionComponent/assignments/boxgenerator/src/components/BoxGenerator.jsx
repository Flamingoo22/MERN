import React, {useState} from 'react'
import Box from './Box';

const BoxGenerator = (props) => { 
    const { height, width, color } = props; //destructure the variables
    const [inputs, setInputs] = useState({ //setStates for each the box parameter
        'height':height,
        'width':width,
        'color':color
    });

    const [ boxArray, setBoxArray ] = useState([ //the array holds the data for the boxes
        // <Box color='red' height={100} width={100}/>,
        // <Box color='blue' height={100} width={100}/>,
        // <Box color='purple' height={100} width={100}/> //testing subjects
    ])

    const setBox = (e) =>{ //update the box parameters: height, width, color
        return (
            setInputs({...inputs,[e.target.name]:e.target.value}) //...inputs to ensure other data is not destroy and pass in the varaible that we changing
        )
    }

    const generateBox =(e)=>{
        e.preventDefault(); //prevent refresh
        // console.log({color})
        setBoxArray([...boxArray, <Box color={inputs.color} height={inputs.height} width={inputs.width}/>]) //pass in ...boxArray to prevent data loss, and pass in the new Box object we created.
    }

    return (
        <div className='container'>
            {/* form for taking the box parameters and generating the box onSubmit */}
            <form onSubmit={generateBox} > 
                    <div className='col d-flex gap-3 row'>
                        <p className='form-label col'>Color:</p>
                        <input type='text' onChange={setBox} name='color' value={inputs.color} className='form-control col'/>
                        <div className='col'></div>
                    </div>
                    {/* remember to double-bind the input tag with a value!! */}
                    {/* check box check equals? */}
                    <div className='col d-flex gap-3 row'>
                        <p className='form-label col'>Height:</p>
                        <input type='number' onChange={setBox} name='height' value={inputs.height} className='form-control col'/>
                        <div className='col'></div>
                    </div>
                    <div className='col d-flex gap-3 row'>
                        <p className='form-label col'>Width:</p>
                        <input type='number' onChange={setBox} name='width' value={inputs.width} className='form-control col'/>
                        <div className='col'></div>
                    </div>
                <input type='submit' value='Add' className='btn btn-primary'/>
            </form>
        
            <div className='d-flex flex-wrap row'>
                {/* use .map to iterate through the array and print out all the boxes */}
                {
                boxArray.map((box, idx) => {
                    console.log({box})
                    return <div key={idx} className='col m-3'>{box}</div>
                })
                }
            </div>
        </div>
    )
}

export default BoxGenerator