import React, { useEffect, useState } from 'react'
import useSound from 'use-sound'
import bells from '../../sounds/Bells.mp3'
import Timer from './Timer'
import Button from '../atoms/Button'

const Counter = (props) =>{
    const [isActive, setIsActive] = useState(false);
    const [isWorking, setIsWorking] = useState(false);
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);

    const [play] = useSound(bells)
    
    const setTime = function (minutes, seconds, isWorking){
        setMinutes(minutes)
        setSeconds(seconds)
        setIsWorking(isWorking)
        play()
    }

    if(seconds === -1){
        setSeconds(59)
        setMinutes(minutes - 1)
    }

    if(minutes === 0 && seconds === 0){
        switch(isWorking) {
            case true:
                setTime(5, 0, false)
                break
            case false:
                setTime(25, 0, false)
                break
            default:
                //
        }
    }
    
    useEffect(() =>{
        if (isActive) {
            setInterval(() => {setSeconds((seconds) => seconds - 1)}, 1000)
        }
    },[isActive])
    
        return(
            <div className='countercontent'>
                <Timer minutes={minutes} seconds={seconds}/>
                <Button function={() => {setIsActive(true); setIsWorking(true)}}>start</Button>
            </div>
        )
    }    
export default Counter