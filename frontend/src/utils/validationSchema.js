import * as Yup from "yup"

export const calculatorSchema = Yup.object({
    num1: Yup.number()
        .typeError("Número 1 inválido")
        .required("Ingresa el número 1 para continuar"),
    
    num2: Yup.number()
        .typeError("Número 2 inválido")
        .required("Ingresa el número 2 para continuar"),
    
    operation: Yup.string()
        .oneOf(["add", "subtract", "multiply", "divide"], "Selecciona una operación válida")
        .required("Debes seleccionar una operación")
})