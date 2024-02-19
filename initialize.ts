
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { db, betterSqlite } from "./src/database";

migrate(db, { migrationsFolder: "drizzle" });
betterSqlite.close()
