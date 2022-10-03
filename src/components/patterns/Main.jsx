import React from 'react'
import Title from '../atoms/Title'
import Link from '../atoms/Link'
import Counter from './Counter'

const Main = () => {
    return(
        <div id='maincontent'>
            <Title>Pomodoro Timer</Title>
            <Counter/>
            <Link link="https://github.com/Nicolassiqueira05/pomodoro-timer">Github</Link>
        </div>
    )
}

export default Main