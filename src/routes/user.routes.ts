import { Elysia } from "elysia";
import { dbPlugin } from "../plugin/db.plugin";

const userRoutes = new Elysia().use(dbPlugin()).get("/user", ({ db }) => {
  return db.query.userTable.findMany();
});

export default userRoutes;
