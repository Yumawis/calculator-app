const calculatorValidator = require("../validators/calculatorValidator.js")

//➕ Addition
const add = (request, response) => {
    try {
        let data = request.body
        let num1 = data.num1
        let num2 = data.num2

        let validatorResult = calculatorValidator.validateIntegers(num1, num2)
        let resultNumber = validatorResult.num1 + validatorResult.num2
        
        return response.status(200).json({
            data: {
                message: 'Resultado operado exitosamente', 
                result: resultNumber
            }
        })
    } catch (error) {
        return response.status(400).json({
            data: {
                message: 'Ocurrió un error al operar el resultado',
                error: error.message
            }
        })
    }
}

// ➖ Subtract
const subtract = (request, response) => {
    try {
        let data = request.body
        let num1 = data.num1
        let num2 = data.num2

        let validatorResult = calculatorValidator.validateIntegers(num1, num2)
        let resultNumber = validatorResult.num1 - validatorResult.num2
        
        return response.status(200).json({
            data: {
                message: 'Operación realizada correctamente', 
                result: resultNumber
            }
        }) 
    } catch (error) {
        return response.status(400).json({
            data: {
                message: 'Ocurrió un error al realizar la operación',
                error: error.message
            }
        })
    }
}

// ✖ Multiply
const multiply = (request, response) => {
    try {
        let data = request.body
        let num1 = data.num1
        let num2 = data.num2

        let validatorResult = calculatorValidator.validateIntegers(num1, num2)
        let resultNumber = validatorResult.num1 * validatorResult.num2
        
        return response.status(200).json({
            data: {
                    message: 'El resultado se obtuvo sin problemas',
                    result: resultNumber
                }
            })
    } catch (error) {
        return response.status(400).json({
            data: {
                message: 'La operación no se realizó correctamente',
                error: error.message
            }
        })
    }
}

// ➗ Divide
const divide = (request, response) => {
    try {
        let data = request.body
        let num1 = data.num1
        let num2 = data.num2

        let validatorResult = calculatorValidator.validateIntegers(num1, num2)

        if (validatorResult.num2 === 0) throw new Error("No es posible dividir por cero")
        
        let resultNumber = validatorResult.num1 / validatorResult.num2
        
        return response.status(200).json({
            data: {
                message: 'Cálculo hecho correctamente', 
                result: resultNumber
        } 
    })
    } catch (error) {
        return response.status(400).json({
            data: {
                message: 'Ocurrió un error al realizar el cálculo',
                error: error.message
            }
        })
    }
}

module.exports = { add, subtract, multiply, divide }