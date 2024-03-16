// import 'dotenv/config';
import { migrate } from "drizzle-orm/mysql2/migrator";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { mysqlConfig } from ".";

const clientConnection = await mysql.createConnection(mysqlConfig);

const db = drizzle(clientConnection);

await migrate(db, { migrationsFolder: "./drizzle" });

await clientConnection.end();
