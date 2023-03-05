import app from "./app";
import "dotenv/config";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("connect database");
    const port = parseInt(process.env.APP_PORT!);

    app.listen(port, () => {
      console.log("server is running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
