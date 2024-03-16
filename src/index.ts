import { Elysia } from "elysia";
import { dbPlugin } from "./plugin/db.plugin";

const app = new Elysia()
  .use(dbPlugin())
  .get("/", async () => {
    return `Hello Ellysia!`;
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
);
