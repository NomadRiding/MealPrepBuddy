import React from "react"
import Layout from "../components/Layout"
import Search from "../components/Search"
import recipes from "../components/RecipeList"
import "./HomePage.css"

export default function HomePage() {
  return (
    <Layout>
      <Search recipes={recipes} />
    </Layout>
  )
}
