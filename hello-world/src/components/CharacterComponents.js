import React from "react";
import "../index.css";

export const Name = props =>{
    return <span className="char_name">{props.name}</span>
};

export const Height = props => {
    return <span className="char_height">{props.height}</span>
};

export const Mass = props => { 
    return <span className="char_mass">{props.mass}</span>
};

export const HairColor = props => {
    return <span className="char_haircolor">{props.haircolor}</span>
};

export const SkinColor = props => {
    return <span className="char_skincolor">{props.skincolor}</span>
};

export const EyeColor = props => { 
    return <span className="char_eyecolor">{props.eyecolor}</span>
};

export const BirthYear = props => {
    return <span className="char_birthyear">{props.birthyear}</span>
};

export const Gender = props => {
    return <span className="char_gender">{props.gender}</span>
};

export const Homeworld = props =>{
    return <span className="char_homeworld">{props.homeworld}</span>
};