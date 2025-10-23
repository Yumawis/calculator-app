import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useCalculateMutation } from "./services/calculateApi";

import { selectResult, setResult } from "./slices/calculateSlices";

import { Box } from "@mui/material";

import { ErrorMessage, Field, Form, Formik } from "formik";

import { calculatorSchema } from "./utils/validationSchema";

import {
  FormErrorMessage,
  H3,
  H4,
  H6,
} from "./components/text/CustomTypography";

import colors from "./theme/colors";

import CalculatorContainer from "./containers/CalculatorContainer";
import CustomFlexCard from "./components/cards/CustomFlexCard";
import CustomButton from "./components/buttons/CustomButton";
import CustomIconButton from "./components/buttons/CustomIconButton";
import CustomNumberInput from "./components/inputs/CustomNumberInput";
import FormFlexBox from "./components/form/FormFlexBox";
import ResultBox from "./components/cards/ResultBoxCard";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import DivideIcon from "./components/icons/DivideIcon";

const App = () => {
  const dispatch = useDispatch();

  const result = useSelector(selectResult);

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
  const handleCalculate = (values) => {
    const body = { operation: values.operation, numbers: values };
    calculate(body);
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
            initialValues={{ num1: "", num2: "", operation: "" }}
            validationSchema={calculatorSchema}
            onSubmit={(values) => handleCalculate(values)}
          >
            {({ values, handleChange, handleBlur, setFieldValue }) => (
              <Form>
                <CustomFlexCard>
                  <H3>CALCULATOR</H3>
                  <FormFlexBox>
                    <Field
                      as={CustomNumberInput}
                      id="num1"
                      name="num1"
                      placeholder="Ingrese el número 1"
                      value={values.num1}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    <ErrorMessage name="num1" component={FormErrorMessage} />
                  </FormFlexBox>

                  <FormFlexBox>
                    <Field
                      as={CustomNumberInput}
                      id="num2"
                      name="num2"
                      placeholder="Ingrese el número 2"
                      value={values.num2}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    <ErrorMessage name="num2" component={FormErrorMessage} />
                  </FormFlexBox>

                  <FormFlexBox>
                    <Box sx={{ width: "100%", display: "flex", gap: "25px" }}>
                      {operationList.map(({ icon: Icon, value }, index) => (
                        <CustomIconButton
                          key={index}
                          icon={
                            <Icon
                              color={
                                values.operation === "divide"
                                  ? colors.textPrimary
                                  : colors.textTertiary
                              }
                            />
                          }
                          onClick={() => setFieldValue("operation", value)}
                          active={values.operation === value}
                        />
                      ))}
                    </Box>

                    <ErrorMessage
                      name="operation"
                      component={FormErrorMessage}
                    />
                  </FormFlexBox>

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
