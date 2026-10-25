
export async function getRecipeFromMistral(ingredientsArr) {
    console.log("1. Get recipe clicked. Ingredients:", ingredientsArr)

    try {
        console.log("2. Sending request to backend...")

        const response = await fetch("http://localhost:3000/api/recipe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ingredients: ingredientsArr
            })
        })

        console.log("3. Backend responded with status:", response.status)

        const data = await response.json()
        console.log("4. Backend response data:", data)

        if (!response.ok) {
            throw new Error(data.error || "Failed to get recipe")
        }

        return data.recipe
    } catch (error) {
        console.error("Frontend request failed:", error)
        throw error
    }
}
