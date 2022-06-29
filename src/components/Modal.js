import React from "react";

const Modal = (props) => {
  return (
    <>
      <div className="backdrop" onClick={props.onCloseModal}></div>
      <div className="modal">
        <h2>{props.label}</h2>
        <h3>Ingredients :</h3>
        <ul>
          {props.ingredients.map((ingredient, index) => {
            return <li key={index}>{ingredient}</li>;
          })}
          
        </ul>
        <div className="btn-control">
          <a href={props.seeMore} target="_blank" className="btn-outline">See more</a>
          <button className="btn-outline btn-outline-red" onClick={props.onCloseModal}> Close</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
