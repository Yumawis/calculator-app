import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useCalculateMutation } from "./services/calculateApi";

import { selectResult, setResult } from "./slices/calculateSlices";

import CalculatorContainer from "./containers/CalculatorContainer";
import CustomIconButton from "./components/buttons/CustomIconButton";
import { FaDivide, FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import CustomNumberInput from "./components/inputs/CustomNumberInput";
import CustomButon from "./components/buttons/CustomButton";
import ResultBox from "./components/result/ResultBox";

const App = () => {
  const dispatch = useDispatch();

  // Estado global
  const { num1, num2, selectedOperation, result } = useSelector(
    (state) => state.calculator
  );

  // Mutaciones RTK Query
  const [addOperation] = useAddOperationMutation();
  const [subtractOperation] = useSubtractOperationMutation();
  const [multiplyOperation] = useMultiplyOperationMutation();
  const [divideOperation] = useDivideOperationMutation();

  // Mapeo de operaciones
  const operationsMap = {
    add: addOperation,
    subtract: subtractOperation,
    multiply: multiplyOperation,
    divide: divideOperation,
  };

  // Manejo de cálculo
  const handleCalculator = async () => {
    const n1 = Number(num1);
    const n2 = Number(num2);

    if (!selectedOperation) return alert("Seleccione una operación");

    const operation = operationsMap[selectedOperation];

    if (!operation) return alert("Operación no válida");

    const { data } = await operation({ num1: n1, num2: n2 });

    if (data?.result !== undefined) {
      dispatch(setResult(data.result));
    } else {
      dispatch(setResult("Error en el cálculo"));
    }
  };

  return (
    <CalculatorContainer>
      <h1>Calculadora</h1>

      {/* Inputs */}
      <CustomNumberInput
        customPlaceholder={"Number 1"}
        value={num1}
        onChange={(e) => dispatch(setNum1(e.target.value))}
      />
      <CustomNumberInput
        customPlaceholder={"Number 2"}
        value={num2}
        onChange={(e) => dispatch(setNum2(e.target.value))}
      />

      {/* Botones de operaciones */}
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <CustomIconButton
          customBackgroundColor="#E8F5E9"
          hoveredBackgroundColor="#92E495"
          customColor="#2E7D32"
          customIcon={<FaPlus size={24} />}
          customBorderColor={"#A5D6A7"}
          isSelected={selectedOperation === "add"}
          onClick={() => dispatch(setSelectedOperation("add"))}
        />

        <CustomIconButton
          customBackgroundColor="#E8F5E9"
          hoveredBackgroundColor="#92E495"
          customColor="#2E7D32"
          customIcon={<FaMinus size={24} />}
          customBorderColor={"#A5D6A7"}
          isSelected={selectedOperation === "subtract"}
          onClick={() => dispatch(setSelectedOperation("subtract"))}
        />
        <CustomIconButton
          customBackgroundColor="#E8F5E9"
          hoveredBackgroundColor="#92E495"
          customColor="#2E7D32"
          customIcon={<FaTimes size={24} />}
          customBorderColor={"#A5D6A7"}
          isSelected={selectedOperation === "multiply"}
          onClick={() => dispatch(setSelectedOperation("multiply"))}
        />
        <CustomIconButton
          customBackgroundColor="#E8F5E9"
          hoveredBackgroundColor="#92E495"
          customColor="#2E7D32"
          customIcon={<FaDivide size={24} />}
          customBorderColor={"#A5D6A7"}
          isSelected={selectedOperation === "divide"}
          onClick={() => dispatch(setSelectedOperation("divide"))}
        />
      </div>

      {/* Boton de calcular */}
      <CustomButton
        customBackgroundColor={"#43A047"}
        hoveredBackgroundColor="#337C36"
        customColor={"#fff"}
        customText={"CALCULAR"}
        handleOnClick={handleCalculator}
      />

      {/* Resultado */}
      <ResultBox result={result} />
    </CalculatorContainer>
  );
};

export default App;
