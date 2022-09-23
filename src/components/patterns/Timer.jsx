import React, { useState } from 'react'
import Number from '../atoms/Number'

const Timer = (props) =>{
    return <Number>{props.children}</Number>
}
export default Timer