
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

export const betterSqlite = new Database("sqlite.db");
export const db = drizzle(betterSqlite);
