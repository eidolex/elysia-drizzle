import { Elysia } from "elysia";
import app from "./app";

const server = new Elysia().use(app).listen(3000);

console.log(
  `🦊 Elysia is running at http://${server.server?.hostname}:${server.server?.port}`,
);
