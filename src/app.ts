import express, { Application } from "express";
import "express-async-errors";
import { handleError } from "./errors/handleError";
import routes from "./routes";

const app: Application = express();

app.use(express.json());
app.use("", routes);
app.use(handleError);

export default app;
