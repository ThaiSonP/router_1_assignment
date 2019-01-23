
import React from 'react';
export const RandomImage = (props) => {
  if(!props.image){props.callImage()}
  return(
    <>
      This is Random Image
      <br/>
      <button onClick={props.callImage}>Click me</button>
      <br/>
      <img src={props.image} alt =""/>
    </>
  )
}
