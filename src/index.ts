import express, { Application, Request, Response } from "express";
const app: Application = express();

app.get("./", (req: Request, res: Response) => {
  res.send("Ok");
});

app.listen(9000, () => {
  console.log(9000);
});
