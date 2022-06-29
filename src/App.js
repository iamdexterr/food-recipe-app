import './App.css';
import {useState,useEffect} from 'react';
import Header from './components/Header';
import Recipe from './components/Recipe';

// https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}
// app id c4ccf708
// app key 2dc36053a5fe5c207e9995d1b89e26f0

function App() {

  const [recipes,setRecipes]=useState([]);
  const [isLoading,setIsLoading]=useState(false);

  const APP_ID = "c4ccf708";
  const APP_KEY = "2dc36053a5fe5c207e9995d1b89e26f0";


  useEffect(()=>{
    getRecipe('Panner');
    console.log('inside useEffct');
  },[])

  const getRecipe=async(recipeName)=>{
    setIsLoading(true);
    const res= await fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await res.json();
    setRecipes(data.hits);
    setIsLoading(false);
  }

  return (
    <div className="App">
      {isLoading && <div className='loader'>Loading ....</div>}
      <Header onRecipeSearch={getRecipe}/>
      <Recipe recipeList={recipes}/>
    </div>
  );
}

export default App;
