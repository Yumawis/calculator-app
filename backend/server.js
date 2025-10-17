// 🚀 Configuring server.js
const { appConfig } = require('./config/app.config.js') // 👈 Import centralized configuration

const express = require("express")
const cors = require("cors")
const calculatorRoutes = require("./routes/calculatorRoutes.js")

// 🏗️ Initialize the Express application
const app = express()

// 🧩 Global Middlewares
app.use(
  cors({
    origin: appConfig.allowedCORS, // 👈 Allowed domains from app.config.json
    credentials: true,             // 👈 Allows sending of cookies or personalized headers
  })
);

app.use(express.json()) // 📦 Allows receiving JSON in requests

// 🛣️ Main Routes
app.use("/api/v1/calculator", calculatorRoutes)

// ⚙️ Start the server
app.listen(appConfig.port, () => {
  console.log("========================================")
  console.log("🟢 Servidor iniciado correctamente")
  console.log(`🌐 URL base: http://localhost:${appConfig.port}`)
  console.log("⚙️ Configuración:")
  console.log(`     - CORS permitido: ${appConfig.allowedCORS.join(", ")}`)
  console.log("========================================\n")
})