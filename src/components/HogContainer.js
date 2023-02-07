import React from "react";
import Hog from "./Hog";

const HogContainer = ({ hogs }) => {
  


const newHogs = hogs.map((hog)=> (
    <Hog 
    key={hog.name}
    name = {hog.name}
    specialty = {hog.specialty}
    weight = {hog.weight}
    medal = {hog['highest medal achieved']}
    image = {hog.image}
    />
))
    

    return (
        <div>
        {newHogs}
        </div>
    )
}

export default HogContainer;