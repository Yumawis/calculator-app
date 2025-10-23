// ✅ Validates that the entered values ​​are valid integers

const validateIntegers = (num1, num2) => {
  const values = [num1, num2]

  // 🚫 Validate empty or undefined fields
  const hasEmptyValue = values.some(
    (value) => value === undefined || value === null || value === ""
  )

  if (hasEmptyValue) throw new Error("Los valores (num1 y num2) son requeridos y no pueden estar vacíos") 
  
  // 🔢 Convert and validate numeric type
  const parsedValues = values.map((value) => Number (value))

  if (parsedValues.some((n) => Number.isNaN(n))) throw new Error("Los valores deben ser numéricos")

  // 🧮 Validate integers
  if (parsedValues.some((n) => !Number.isInteger(n)))   throw new Error("Los valores deben ser números enteros") 
  
  return {  num1: parsedValues[0], num2: parsedValues[1] }  
}

module.exports = { validateIntegers } 