/* eslint-disable import/no-anonymous-default-export */
import './Card.css'
import React from 'react'

export default (props) => {
    const {title, children, color} = props
    const CardStyle = {
        backgroundColor: color || '#0f0',
        borderColor: color || '#0f0',
    }
    return (
        <div className='card' style={CardStyle}>
            <div className='Title'>{title}</div>
            <div className='Content'>{children}</div>
        </div>
    )
} 