import React from 'react'
import './styles.css'

const CharComponent = props => {
    return (
        <h3 onClick={props.remove} className='char'>
            Letter received: {props.letter}
        </h3>
    )}

export default CharComponent