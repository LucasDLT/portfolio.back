import express from "express";
import cors from "cors";
import emailRoutes from "./routes/email.routes";

const app = express();

app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(express.json());

app.use("/email", emailRoutes);

export default app;