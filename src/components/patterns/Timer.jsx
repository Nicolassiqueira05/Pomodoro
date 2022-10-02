import React from 'react'
import Number from '../atoms/Number'

const Timer = (props) => {
    return(
        <div id='timer'>
            <Number>{props.minutes}</Number>
            <p>:</p>
            <Number>{props.seconds}</Number>
        </div>
    )
}
export default Timer