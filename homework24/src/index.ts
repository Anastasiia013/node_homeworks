import "dotenv/config";
import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("This is my GET request");
});

app.post("/echo", (req: Request, res: Response) => {
  res.json({
    message: "My message: ",
    data: req.body,
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
