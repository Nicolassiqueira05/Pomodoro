import React, { useEffect, useState } from 'react'
import Timer from './Timer'
import Button from '../atoms/Button'

const Counter = (props) =>{
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);

    useEffect(() =>{
        if (isActive) {
            setInterval(() => {setTime((time) => time + 1)}, 1000)
            
        }
        
        
    },[isActive, isPaused])
        
    const start = () =>{
        setIsActive(true)
    }

    return(
    <div>
        <Timer>{time}</Timer>
        <Button function={start}>start</Button>
    </div>
        
    )
}
export default Counter