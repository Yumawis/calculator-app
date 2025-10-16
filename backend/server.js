// configuración del server.js
const express = require("express")
const cors = require("cors")
const calculatorRoutes = require("./routes/calculatorRoutes.js")

const app = express()

const PORT = 5000

// 🧩 Middleware globales
app.use(
  cors({
    origin: "http://localhost:5173", // 👈 Permite solo tu frontend local
    methods: ["POST"],        // 👈 Métodos permitidos
    credentials: true,               // 👈 Si más adelante envías cookies o headers
  })
);

app.use(express.json())

// Rutas
app.use("/api/calculator", calculatorRoutes)

app.listen(PORT, () => {
  console.log(`👌 Servidor corriendo en http://localhost:${PORT}`)
})