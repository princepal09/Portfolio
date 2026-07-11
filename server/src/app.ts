import express, { Request, Response } from "express";
import cors from "cors";
import githubRoutes from "./routes/route";
import dotenv from 'dotenv'
dotenv.config()

const app = express();

app.use(express.json());
app.use(
  cors({
    origin:process.env.CLIENT_URL,
  }),
);
app.use('/api/v1', githubRoutes)

app.get("/", (req: Request, res: Response) => {
  return res.json({
    success: true,
    message: "Your server is up and running...",
  });
});

export default app;

