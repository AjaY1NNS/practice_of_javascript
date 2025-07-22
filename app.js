import express from "express";
import indexRouter from "./routing/index.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

// middlewares
app.use(express.json());
app.use("/", indexRouter);

// Routing
app.get("/", (req, res) => {
    return res.send("Server is runnig..");
})

// Server listening 
app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});