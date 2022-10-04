import React, { useEffect, useState } from 'react'
import useSound from 'use-sound'
import bells from '../../sounds/Bells.mp3'
import Timer from './Timer'
import Button from '../atoms/Button'

const Counter = (props) =>{
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [isWorking, setIsWorking] = useState(false);
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);

    const [play] = useSound(bells)

    if(seconds === -1){
        setSeconds(59)
        setMinutes(minutes - 1)
    }

    function setTime(minutes, seconds, isWorking){
        setMinutes(minutes)
        setSeconds(seconds)
        setIsWorking(isWorking)
        play()
    }

    if(minutes === 0 && seconds === 0){
        switch(isWorking) {
            case true:
                setTime(5, 0, false)
                break
            case false:
                setTime(25, 0, false)
        }
    }

    useEffect(() =>{
        if (isActive && !isPaused) {
            setInterval(() => {setSeconds((seconds) => seconds - 1)}, 1000)
        }
    },[isActive, isPaused])
    
        return(
            <div className='countercontent'>
                <Timer minutes={minutes} seconds={seconds < 10 ? "0" + seconds : seconds}/>
                <Button function={() => {setIsActive(true); setIsPaused(false); setIsWorking(true)}}>start</Button>
            </div>
        )
    }    
export default Counter