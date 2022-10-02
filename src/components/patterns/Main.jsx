import React from 'react'
import Title from '../atoms/Title'
import Counter from './Counter'

const Main = () => {
    return(
        <div id='maincontent'>
            <Title>Pomodoro Timer</Title>
            <Counter/>
        </div>
    )
}

export default Main