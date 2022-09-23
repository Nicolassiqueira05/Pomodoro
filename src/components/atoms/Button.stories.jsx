import React from 'react'
import Button from './Button'

export default {
    title: "Atoms/Button",
    component: Button,
}

export const standard = (props) =>{
    return <Button function={() => console.log("clicked")}>{"Test"}</Button>
} 
