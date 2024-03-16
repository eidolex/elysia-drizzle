import { Elysia, t } from "elysia";
import { dbPlugin } from "../plugin/db.plugin";

const userApp = new Elysia({
  prefix: "/user",
})
  .use(dbPlugin())
  .get("/", ({ db }) => {
    return db.query.userTable.findMany({
      columns: {
        password: false,
      },
    });
  })
  .get(
    "/:id",
    async ({ db, params }) => {
      // await delay(1000);
      const user = await db.query.userTable.findFirst({
        columns: {
          password: false,
        },
        where: (user, { eq }) => eq(user.id, params.id),
      });

      if (!user) {
        throw new Error("User not found");
      }

      return user;
    },
    {
      params: t.Object({
        id: t.Numeric(),
      }),
    },
  );

export default userApp;
