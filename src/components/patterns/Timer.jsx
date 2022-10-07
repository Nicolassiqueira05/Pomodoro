import React from 'react'
import Number from '../atoms/Number'

const Timer = (props) => {
    return(
        <div id='timer'>
            <Number>{props.minutes}</Number>
            <p>:</p>
            <Number>{props.seconds < 10 ? "0" + props.seconds : props.seconds}</Number>
        </div>
    )
}
export default Timer