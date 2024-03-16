import { Elysia } from "elysia";
import { dbPlugin } from "./plugin/db.plugin";
import userRoutes from "./routes/user.routes";

const app = new Elysia()
  .use(dbPlugin())
  .get("/", async () => {
    return `Hello Ellysia!`;
  })
  .use(userRoutes)
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
);
