/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props => {
    const {firstName,surname} = props
    return (
        <div>
            {firstName} <strong>{surname}</strong>
        </div>
    )
}
