const CalculatorContainer = ({ children }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E3E2E2",
      }}
    >
      <div
        style={{
          width: "320px",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: "16px",
          borderColor: "#E0E0E0",
          textAlign: "center",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          gap: "16px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default CalculatorContainer;
