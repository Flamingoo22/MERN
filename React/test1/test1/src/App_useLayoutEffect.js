import { useLayoutEffect, useEffect, useRef } from "react";

function useLayoutEffectTutorial(){
    const inputRef = useRef(null);
    
    useLayoutEffect(() => {
        console.log('UseLayOutEffect');
    },[])

    useEffect(() =>{
        console.log('UseEffect')
    },[]);

    return (
    <div>
        <input ref={useRef} value='Pedro'/>
    </div>
    )
}