import React from "react";
import ReactDOM from "react-dom";
import {
    Name,
    Height, 
    Mass, 
    HairColor, 
    SkinColor, 
    EyeColor,
    BirthYear,
    Gender, 
    Homeworld
} from "./components/CharacterComponents.js";
import { characterData } from "./fakeData/characters.js";

const Character = props => {
    console.log(`Prop? :`, props);
    return (
        <div className="bio">
            <Name name={props.charInfo.name} />
            <Height height={props.charInfo.height} />
            <Mass mass={props.charInfo.mass} />
            <HairColor haircolor={props.charInfo.haircolor} />
            <SkinColor skincolor={props.charInfo.skincolor} />
            <EyeColor eyecolor={props.charInfo.eyecolor} />
            <BirthYear birthyear={props.charInfo.birthyear} />
            <Gender gender={props.charInfo.gender} />
            <Homeworld homeworld={props.charInfo.homeworld} />
        </div>
    
    );
};



const CharacterList = () => {
    const elementList = characterData.map((element, index) => {
        return <Character charInfo={element} key={index} />;
    });

    return elementList;
};

ReactDOM.render(<CharacterList />, document.querySelector("#root"));