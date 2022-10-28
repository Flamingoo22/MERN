import React, { useState } from 'react'
import Display from './components/Display'


const App_Display = () => {

    const animalsArr = ['zebra', 'lion', 'hippo', 'eagle']

    const [animals, setAnimals] = useState(animalsArr)

    return (
        <div className='App'>
            {JSON.stringify(animals)}
            <h1>Zoo!</h1>
            <Display animals={animals}/>
        </div>
    )
}

export default App_Display