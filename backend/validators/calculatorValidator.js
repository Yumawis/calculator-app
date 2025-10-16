const validateIntegers = (num1, num2) => {
  // Intenta convertir a número
  const n1 = Number(num1)
  const n2 = Number(num2)

  // Verifica que ambos sean números enteros
  if (!Number.isInteger(n1) || !Number.isInteger(n2)) {
    throw new Error("Los valores deben ser números enteros")
  }
  return { num1: n1, num2: n2 }
}

module.exports = { validateIntegers } 