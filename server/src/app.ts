import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.get("/", (req: Request, res: Response) => {
  return res.json({
    success: true,
    message: "Your server is up and running...",
  });
});

export default app;
