

import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { getRecipeFromMistral } from "./ai.js"

dotenv.config({ path: "server/.env"})

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({ origin: "http://localhost:5173"}))
app.use(express.json())

app.post("/api/recipe", async (req, res)=>{
    const { ingredients } = req.body ?? {}

    if(
        !Array.isArray(ingredients) ||
        ingredients.length === 0 ||
        !ingredients.every(item => typeof item === "string")
    ) {
        return res.status(400).json({
            error: "Please provide a valid list of ingredients."
        })
    }

    try{
        const recipe = await getRecipeFromMistral(ingredients)

        return res.status(200).json({ recipe })
    } catch (error) {
        console.error("Recipe generation failed:", error.message)

        return res.status(500).json({
            error: "Failed to generate a recipe. Check the backend terminal."
        })
    }
})

app.listen(PORT, ()=> {
    console.log(`Backend running at http://localhost:${PORT}`)
})