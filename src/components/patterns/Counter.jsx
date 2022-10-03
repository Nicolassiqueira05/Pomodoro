import React, { useEffect, useState } from 'react'
import Timer from './Timer'
import Button from '../atoms/Button'

const Counter = (props) =>{
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [isWorking, setIsWorking] = useState(false)
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);

    if(seconds == -1){
        setSeconds(59)
        setMinutes(minutes - 1)
    }

    if(minutes == 0 && seconds == 0){
        switch(isWorking) {
            case true:
                setMinutes(5)
                setSeconds(0)
                setIsWorking(false)
                break
            case false:
                setMinutes(25)
                setSeconds(0)
                setIsWorking(true)
        }
    }

    useEffect(() =>{
        if (isActive) {
            setInterval(() => {setSeconds((seconds) => seconds - 1)}, 1000)
        }
    },[isActive, isPaused])
    
    if(seconds < 10){//render the left 0
        return(
            <div className='countercontent'>
                <Timer minutes={minutes} seconds={"0" + seconds}/>
                <Button function={() => {setIsActive(true); setIsWorking(true)}}>start</Button>
            </div>
        )
    }
    else{//standard render
        return(
            <div className='countercontent'>
                <Timer minutes={minutes} seconds={seconds}/>
                <Button function={() => {setIsActive(true); setIsWorking(true)}}>start</Button>
            </div>
        )
    }    
}
export default Counter