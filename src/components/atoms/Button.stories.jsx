import React from 'react'
import './style.css'
import Button from './Button'

export default {
    title: "Button",
    component: Button
}

export const standard = ({ text }) => <Button className="btn">{text}</Button>
standard.args = {
    text: "start",
}
