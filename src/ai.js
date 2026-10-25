export async function getRecipeFromMistral(ingredientsArr) {
    const response = await fetch("http://localhost:3000/api/recipe", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ ingredients: ingredientsArr })
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.error || `Request failed: ${response.status}`)
    }

    return data.recipe
}