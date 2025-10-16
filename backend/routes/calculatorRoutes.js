const express = require("express")
const router = express.Router()
const calculatorController = require("../controllers/CalculatorController.js")

//➕ Addition
router.post("/add", async (request, response) => {
    return calculatorController.add(request, response)
})

// ➖ Subtract
router.post("/subtract", async (request, response) => {
    return calculatorController.subtract(request, response)
})

// ✖ Multiply
router.post("/multiply", async (request, response) => {
    return calculatorController.multiply(request, response)
})

// ➗ Divide
router.post("/divide", async (request, response) => {
    return calculatorController.divide(request, response)
})

module.exports = router