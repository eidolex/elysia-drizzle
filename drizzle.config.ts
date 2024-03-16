import type { Config } from "drizzle-kit";
export default {
  schema: "./src/database/schema",
  out: "./.drizzle",
  driver: "mysql2", // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    database: process.env.DB_DATABASE || "ee_app",
  },
} satisfies Config;
