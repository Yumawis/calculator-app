const ResultBox = ({ result }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        gap: "12px",
        border: "1.5px solid #90CAF9",
        backgroundColor: "#E8F5E9",
        borderRadius: "8px",
        textAlign: "left",
      }}
    >
      <b style={{ fontSize: "16px" }}> Resultado:</b>
      <div
        style={{
          width: "100%",
          display: "flex",
          padding: "8px 0",
          background: "#92E495",
          borderRadius: "5px",
          justifyContent: "center",
        }}
      >
        <span>{result}</span>
      </div>
    </div>
  );
};

export default ResultBox;
