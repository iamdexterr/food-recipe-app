import React from "react";
import RecipeList from "./RecipeList";

const Recipe = ({ recipeList }) => {

const content =recipeList.map((res) => {
    return (
      <RecipeList
        recipeName={res.recipe.label}
        img={res.recipe.image}
        ingredients={res.recipe.ingredientLines}
        seeMore={res.recipe.url}
        key={res.recipe.label}
      />
    );
  })

  return (<>
       {recipeList.length === 0 && <div className="no-result">No Result found</div>} 
    <div className="container">
      {content}
    </div>
    </>
  );
};

export default Recipe;
