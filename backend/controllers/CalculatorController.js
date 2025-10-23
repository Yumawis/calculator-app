const calculatorValidator = require("../validators/calculatorValidator.js")

//➕ Addition function
const addNumbers = (req, res) => {
    try {
        const { num1, num2 } = req.body
        console.log("🧮 Ejecutando operación: Suma", { num1, num2 })

        let validatorResult = calculatorValidator.validateIntegers(num1, num2)
        let resultNumber = validatorResult.num1 + validatorResult.num2
        
        const response = { 
            data: {
                message: 'Suma realizada correctamente', 
                result: resultNumber
            }
        }

        console.log("✅ Respuesta enviada", response)
        return res.status(200).json(response)
    } catch (error) {
        const errorMessage = error.message
        console.error("❌ Error en suma:", errorMessage)

        return res.status(422).json({
            data: {
                message: 'Ocurrió un error al procesar la operación',
                error: errorMessage
            }
        })
    }
}

// ➖ Subtract function
const subtractNumbers = (req, res) => {
    try {
        const { num1, num2 } = req.body
        console.log("🧮 Ejecutando operación: Resta", { num1, num2 })

        let validatorResult = calculatorValidator.validateIntegers(num1, num2)
        let resultNumber = validatorResult.num1 - validatorResult.num2
        
        const response = {
            data: {
                message: 'Resta realizada correctamente', 
                result: resultNumber
            }
        }

        console.log("✅ Respuesta enviada:", response)
        return res.status(200).json(response)
    } catch (error) {
        const errorMessage = error.message
        console.error("❌ Error en resta:", errorMessage)

        return res.status(422).json({
            data: {
                message: 'Ocurrió un error al procesar la operación',
                error: errorMessage
            }
        })
    }
}

// ✖ Multiply function
const multiplyNumbers = (req, res) => {
    try {
        const { num1, num2 } = req.body
        console.log("🧮 Ejecutando operación: Multiplicación", {num1, num2})

        let validatorResult = calculatorValidator.validateIntegers(num1, num2)
        let resultNumber = validatorResult.num1 * validatorResult.num2
        
        const response = {
            data: {
                message: "Multiplicación realizada correctamente",
                result: resultNumber
            }
        }

        console.log("✅ Respuesta enviada:", response)
        return res.status(200).json(response)
    } catch (error) {
        const errorMessage = error.message
        console.log("❌ Error en multiplicación:", errorMessage)

        return res.status(422).json({
            data: {
                message: 'Ocurrió un error al procesar la operación',
                error: errorMessage
            }
        })
    }
}

// ➗ Divide function
const divideNumbers = (req, res) => {
    try {
        const { num1, num2 } = req.body
        console.log("🧮 Ejecutando operación: División", { num1, num2 }) 

        let validatorResult = calculatorValidator.validateIntegers(num1, num2)

        if (validatorResult.num2 === 0) throw new Error("No es posible dividir por cero")
        
        let resultNumber = validatorResult.num1 / validatorResult.num2
        
        const response ={
            data: {
                message: 'Cálculo hecho correctamente', 
                result: resultNumber
            } 
        }

        console.log("✅ Respuesta enviada:", response)
        return res.status(200).json(response)
    } catch (error) {
        const errorMessage = error.message
        console.error("❌ Error en división:", errorMessage)

        return res.status(422).json({
            data: {
                message: 'Ocurrió un error al realizar el cálculo',
                error: errorMessage
            }
        })
    }
}

module.exports = { addNumbers, subtractNumbers, multiplyNumbers, divideNumbers }