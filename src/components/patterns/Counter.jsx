import React, { useEffect, useState } from 'react'
import Timer from './Timer'
import Button from '../atoms/Button'

const Counter = (props) =>{
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);

    if(seconds == -1){
        setSeconds(59)
        setMinutes(minutes - 1)
    }

    useEffect(() =>{
        if (isActive) {
            setInterval(() => {setSeconds((seconds) => seconds - 1)}, 1000)
        }
    },[isActive, isPaused])
    if(seconds < 10){//necessary to render the left 0
        return(
            <div>
                <Timer minutes={minutes} seconds={"0" + seconds}/>
                <Button function={() => setIsActive(true)}>start</Button>
            </div>
        )
    }
    else{//standard render
        return(
            <div>
                <Timer minutes={minutes} seconds={seconds}/>
                <Button function={() => setIsActive(true)}>start</Button>
            </div>
        )
    }    
}
export default Counter