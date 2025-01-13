/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div>
        <div className="card">
            <img src="https://miro.medium.com/v2/resize:fit:740/0*4HxmoUyeXbMQDOtu.png" width="100%" alt="" />
            <h1 className='cards-titles'>{props.title}</h1>
            <p className='cards-descriptions'>{props.Description}</p>
        </div>
    </div>
  )
}

export default Card