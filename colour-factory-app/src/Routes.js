import React, { useState,
    useEffect} from 'react';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter
 
} from 'react-router-dom';
import ColourList from './Colours.js'
import Colour from './Colour.js'
import NewColourForm from './NewColourForm'



function Routes() {
 
    const initialColors = JSON.parse(localStorage.getItem("colours")) || {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
      };
      const [colours, updateColours] = useState(initialColors);
    
      useEffect(
        () => localStorage.setItem("colors", JSON.stringify(colours)),
        [colours]
      );
    
      function handleAdd(newColourObj) {
        updateColours(prevColours => ({ ...prevColours, ...newColourObj }));
      }
    
      function renderCurrentColor(props) {
        const { colour } = props.match.params;
        const hex = colours[colour];
        return <Colour {...props} hex={hex} color={colour} />;
      };



    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/colours">
              <ColourList colours={colours} />
            </Route>
            <Route exact path="/colours/new">
              <NewColourForm addColor={handleAdd} />
            </Route>
            <Route path="/colours/:colour" render={renderCurrentColor} />
            <Redirect to="/colours" />
          </Switch>
        </BrowserRouter>
      );
    }

export default Routes;