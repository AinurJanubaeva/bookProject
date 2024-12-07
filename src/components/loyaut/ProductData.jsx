import React from 'react'

export const ProductData = (props) => {
    
    const {name,age,hobby,telNumber}=props
    
  return (
    <div>
        <hr />
     <h1>{name}</h1>
     <span>{age}</span>
     <p>{hobby}</p>
     <h4>{telNumber}</h4>
    </div>
  )
}


