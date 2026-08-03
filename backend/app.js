const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const eventRoutes = require("./routes/eventRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Serve frontend files
app.use(express.static(path.join(__dirname, "../frontend")));

// API Routes
app.use("/api/events", eventRoutes);

// Home Route
app.get("/api", (req, res) => {
    res.json({
        message: "Smart Event Management Portal API is running"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});