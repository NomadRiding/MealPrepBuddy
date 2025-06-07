import React from "react"

export default function Search() {
  const [searchRecipe, setSearchRecipe] = React.useState("")

  const recipeList = filteredRecipes.map((recipe) => (
    <div key={recipe.id} className="recipe-item">
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>
    </div>
  ))
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchRecipe.toLowerCase())
  )

  return (
    <div className="search-container">
      <input
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
