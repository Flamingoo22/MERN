import React from 'react'
import SubContents from './SubContents'
import Advertisement from './Advertisement'

const Main = () => {
    return (
        <div className='main'>
            <SubContents />
            <SubContents />
            <SubContents />
            <Advertisement />
        </div>
    )
}

export default Main