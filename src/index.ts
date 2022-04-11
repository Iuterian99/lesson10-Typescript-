import express, { Application, Request, Response } from "express";
const app: Application = express();

const fn = (num1: number, num2: number): number => num1 + num2;

app.get("/", (req: Request, res: Response) => {
  console.log(fn(2, 3));

  res.send("ok");
});

app.listen(9000, () => {
  console.log(9000);
});
