import { Elysia } from "elysia";
import { dbPlugin } from "../plugin/db.plugin";
import userApp from "./user";

export const app = new Elysia()
  .use(dbPlugin())
  .use(userApp)
  .get("/", () => "Hello, Elysia!");

export default app;
