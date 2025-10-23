const express = require("express")
const router = express.Router()
const calculatorController = require("../controllers/CalculatorController.js")

// Middleware to log every incoming request
router.use((req, res, next) => {
    console.log(`\n📥 Nueva petición: ${req.method} ${req.originalUrl} [${new Date().toISOString()}]`)
    next()
})

//➕ Addition
router.post("/add", calculatorController.addNumbers)

// ➖ Subtract
router.post("/subtract", calculatorController.subtractNumbers)

// ✖ Multiply
router.post("/multiply", calculatorController.multiplyNumbers)

// ➗ Divide
router.post("/divide", calculatorController.divideNumbers)

module.exports = router