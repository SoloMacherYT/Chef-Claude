
import React from "react"
import IngredientsList from "./components/IngredientsList"
import ClaudeRecipe from "./components/ClaudeRecipe"
import { getRecipeFromMistral } from "./ai.js"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([
        "chicken",
        "all the main spices",
        "corn",
        "heavy cream",
        "pasta"
    ])
    const [recipe, setRecipe] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const requestInProgress = React.useRef(false)

    async function getRecipe() {
        if (requestInProgress.current) return

        requestInProgress.current = true
        setLoading(true)

        try {
            const result = await getRecipeFromMistral(ingredients)
            setRecipe(result)
        } catch (error) {
            console.error("Recipe request failed:", error)
            alert("Recipe failed. Check the backend terminal for the error.")
        } finally {
            requestInProgress.current = false
            setLoading(false)
        }
    }

    function addIngredient(formData) {
        const ingredient = formData.get("ingredient")?.trim()
        if (ingredient) {
            setIngredients(prev => [...prev, ingredient])
        }
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    name="ingredient"
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                />
                <button type="submit">Add ingredient</button>
            </form>

            {ingredients.length > 0 && (
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                    loading={loading}
                />
            )}

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}
