import React from "react"
import "../styles/RecipeList.css"

export default function RecipeList() {
  const recipes = [
    {
      id: 1,
      name: "Taco Salad",
      ingredients: [
        {
          name: "Ground Beef",
          quantityInGrams: 1000,
          unit: "grams",
        },
        {
          name: "Spinach",
          quantityInGrams: 200,
          unit: "grams",
        },
        {
          name: "Tomato",
          quantityInGrams: 300,
          unit: "grams",
        },
        {
          name: "onion",
          quantityInGrams: 100,
          unit: "grams",
        },
      ],
    },
    {
      id: 2,
      name: "Spicy Mac & Cheese",
      ingredients: [
        {
          name: "macaroni",
          quantityInGrams: 500,
          unit: "grams",
        },
        {
          name: "Carolina Reaper Cheese",
          quantityInGrams: 300,
          unit: "grams",
        },
        {
          name: "Ground Beef",
          quantityInGrams: 200,
          unit: "grams",
        },
      ],
    },
  ]
}
