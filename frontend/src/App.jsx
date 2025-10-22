import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useCalculateMutation } from "./services/calculateApi";

import { selectResult, setResult } from "./slices/calculateSlices";

import CalculatorContainer from "./containers/CalculatorContainer";
import CustomFlexCard from "./components/cards/CustomFlexCard";
import CustomButton from "./components/buttons/CustomButton";
import CustomIconButton from "./components/buttons/CustomIconButton";
import CustomNumberInput from "./components/inputs/CustomNumberInput";
import colors from "./theme/colors";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import DivideIcon from "./components/icons/DivideIcon";

import { Box } from "@mui/material";
import CustomTypography, {
  H3,
  H4,
  H6,
} from "./components/text/CustomTypography";
import { Field, Form, Formik } from "formik";
import ResultBox from "./components/cards/ResultBoxCard";

const App = () => {
  const dispatch = useDispatch();

  const result = useSelector(selectResult);

  const [operation, setOperation] = useState(null);

  const [
    calculate,
    {
      data: calculateData,
      isSuccess: isSuccessCalculate,
      error: calculateError,
      isError: isErrorCalculate,
    },
  ] = useCalculateMutation();

  const operationList = [
    { icon: AddIcon, value: "add" },
    { icon: RemoveIcon, value: "subtract" },
    { icon: CloseIcon, value: "multiply" },
    { icon: DivideIcon, value: "divide" },
  ];

  // Manejo de cálculo
  const handleCalculate = (numbers) => {
    const body = { operation, numbers };

    if (!operation) {
      alert("Es necesario seleccionar una operación");
    } else if (numbers.num1 === "" || numbers.num2 === "") {
      alert("Debes ingresar los números antes de una operación");
    } else {
      calculate(body);
    }
  };

  useEffect(() => {
    if (isSuccessCalculate) dispatch(setResult(calculateData));
  }, [isSuccessCalculate]);

  useEffect(() => {
    if (isErrorCalculate) alert(calculateError?.data?.error);
  }, [isErrorCalculate]);

  return (
    <CalculatorContainer>
      <Box
        sx={{
          width: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "45px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "35px",
          }}
        >
          <Formik
            initialValues={{ num1: "", num2: "" }}
            onSubmit={(values) => handleCalculate(values)}
          >
            {({ values, handleChange, handleBlur }) => (
              <Form>
                <CustomFlexCard>
                  <H3>CALCULATOR</H3>

                  <Field
                    as={CustomNumberInput}
                    id="num1"
                    name="num1"
                    placeholder="Ingrese el número 1"
                    value={values.num1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <Field
                    as={CustomNumberInput}
                    id="num2"
                    name="num2"
                    placeholder="Ingrese el número 2"
                    value={values.num2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <Box sx={{ width: "100%", display: "flex", gap: "25px" }}>
                    {operationList.map(({ icon: Icon, value }, index) => (
                      <CustomIconButton
                        key={index}
                        icon={
                          <Icon
                            color={
                              operation === "divide"
                                ? colors.textPrimary
                                : colors.textTertiary
                            }
                          />
                        }
                        onClick={() => setOperation(value)}
                        active={operation === value}
                      />
                    ))}
                  </Box>

                  <CustomButton type="submit">CALCULAR</CustomButton>

                  <ResultBox>
                    <H6>RESULTADO</H6>
                    <Box
                      sx={{
                        backgroundColor: colors.tertiary,
                        borderRadius: "0.5rem",
                        padding: "0.5em 1em",
                        textAlign: "center",
                      }}
                    >
                      <H4>{result}</H4>
                    </Box>
                  </ResultBox>
                </CustomFlexCard>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </CalculatorContainer>
  );
};

export default App;
