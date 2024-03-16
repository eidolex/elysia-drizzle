import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

export const mysqlConfig: mysql.ConnectionOptions = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  database: process.env.DB_DATABASE || "ee_app",
};

export const poolConnection = mysql.createPool({
  ...mysqlConfig,
});

const db = drizzle<typeof schema>(poolConnection, {
  mode: "default",
  schema: schema,
});

export type Database = typeof db;

export default db;
