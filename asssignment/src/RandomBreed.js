
import React from 'react';
export const RandomBreed = (props) => {
  return(
    <>
      This is Random Breed
      <br/>
      <select name='chosen' onChange={props.handleChange}>
        <option key='0'>Choose a breed</option>
        {props.makeOptions()}
      </select>
      <button onClick={props.callImage}>Confirm</button>
      <br/>
      <img src={props.image} alt=""/>
    </>
  )
}
