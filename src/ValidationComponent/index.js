import React from 'react'

const ValidationComponent = props => {
    console.log('props.textLength ',props.textLength )
    const validationText = props.textLength > 5? 
    'Text long enough': 'text too short'

    return (
       
        <h2 >{validationText}</h2>
    )
}

export default ValidationComponent