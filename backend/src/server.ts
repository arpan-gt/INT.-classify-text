import { expressApp } from "./app.js";
import { env } from "./config/env.js";

const app = expressApp();

app.listen(env.port, () => {
  console.log(`listening to http://localhost:${env.port}`);
});
