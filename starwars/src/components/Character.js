import React from 'react';

// props added to component as a class property
// accessible via the "this" keyword - this.props

export default function Character(props) {
  console.log(props.chars)
  console.log(props.chars.name)
  return (
    <div className="charCard">
    <div className="charInfo">
      <h3>{props.name}</h3>
      <p>
        <strong>Height:</strong> {props.height}
      </p>
      <p>
        <strong>Gender:</strong> {props.gender}
      </p>
      <p>
        <strong>Hair Color:</strong>{' '}
        {props.hair_color}
      </p>
    </div>
  </div>
  )
}
