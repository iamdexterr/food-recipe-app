import React from "react";
import { useState } from "react";
import Modal from "./Modal";

const RecipeList =(props) => {
    const [showModal,setShowModal] = useState(false);

    const modalCloseHandler=()=>{
        setShowModal(false);
    }

  return (
    <>
    {showModal && <Modal ingredients={props.ingredients} label={props.recipeName} seeMore={props.seeMore} onCloseModal={modalCloseHandler}/>}
   <div className="recipeCard">
      <img
        src={props.img}
        alt="image"
      />
      <h2>{props.recipeName}</h2>
      <button className="btn-outline" onClick={()=>{setShowModal(true)}}>Ingredients</button>
      <a href={props.seeMore}className="btn-outline btn-outline-red" target="_blank">
        See complete Recipe
      </a>
    </div>
    </>
 
  );
};

export default RecipeList;
