import React from "react"
import "../styles/Search.css"

export default function Search({ recipes }) {
  const [searchRecipe, setSearchRecipe] = React.useState("")

  if (!recipes || recipes.length === 0) {
    return <p>No recipes available.</p>
  }

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchRecipe.toLowerCase())
  )
  const recipeList = filteredRecipes.map((recipe) => (
    <div key={recipe.id} className="recipe-item">
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>
    </div>
  ))

  return (
    <div className="search-container">
      <label htmlFor="search-input" style={{ display: "none" }}>
        Search Recipes
      </label>
      <input
        id="search-input"
        type="text"
        placeholder="Search for a recipe..."
        value={searchRecipe}
        onChange={(e) => setSearchRecipe(e.target.value)}
        className="search-input"
      />
      <div className="recipe-list">
        {filteredRecipes.length > 0 ? recipeList : <p>No recipes found.</p>}
      </div>
    </div>
  )
}
