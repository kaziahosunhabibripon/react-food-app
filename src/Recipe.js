import React from 'react';
import style from './recipes.module.css';


const Recipe = ({title,calories,image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <img className={style.image} src={image} alt=""/>
            <h4 >{title}</h4>
            <p>{calories.toFixed("2")} cal</p> 
            <ol>
                {
                ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    );
}

export default Recipe;