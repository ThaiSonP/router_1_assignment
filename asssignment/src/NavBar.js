import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = (props) => {
  return(
    <>
      <nav>
        <Link to={"/"}>[ Home ]</Link>
        <Link to={"/random"}>[ Random ]</Link>
        <Link to={'/random/:num'}>[ Random Id]</Link>
        <Link to={'/randomBreed'}>[ Breed ]</Link>
      </nav>
    </>
  )
}
