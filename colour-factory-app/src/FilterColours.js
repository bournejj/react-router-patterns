import React from 'react';
import { useParams } from 'react-router-dom';
import Colour from './Colour';

function FilterColours({colours}) {
   
  const {name} = useParams();
  console.log(name)

  if (name) {
    const currentColour = colours.find(
      colour => colour.name === name
    );
    return <Colour colour={currentColour} />;
  }
  
  return null;
}

export default FilterColours;