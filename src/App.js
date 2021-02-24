import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';
import style from './recipes.module.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('Chicken');
  const appId = "d81e6727";
  const apiKey = "734a3d2a9ab9fd760eb90003e26c4d50";
  const url = (`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${apiKey}`);

  useEffect(() => {
    getRecipes();
  }, [query]);
// load recipes data
  const getRecipes = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setRecipes(data.hits);
  };
// update search
  const updateSearch = event => {
    setSearch(event.target.value);
  };

// search bar enable
  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App">
      <div>
        <h1 className={style.heading}>Welcome To Turan's Food House...</h1>
        <form onSubmit={getSearch} className="search-name">
          <input className='search-bar' type="text" value={search} onChange={updateSearch} />
          <button className="search-button" type="submit">Search</button>
        </form>
      </div>
      <header className="App-header">
        <div className="recipes">
        {
          recipes.map(recipe => (<
            Recipe key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />))
        }
        </div>
      </header>
    </div>
  );
}

export default App;
