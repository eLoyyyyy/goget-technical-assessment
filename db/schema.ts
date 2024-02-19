import { InferModel, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { PREFERRED_THEME } from "../src/types/PreferredTheme";

/**
 * opted to go for individual settings per column
 * instead of having a setting_key -> setting_value
 * columns because of time constraint. for more
 * scalability in terms of settings to be added,
 * but you'd need a settings table just for keys,
 * so you'd have user_settings <- settings
 */

export const userSettings = sqliteTable('user_settings', {
  id: integer('id').primaryKey(),
  userId: text('user_id').unique().notNull(),
  preferredTheme: text('preferred_theme', { enum: [
    PREFERRED_THEME.DARK,
    PREFERRED_THEME.LIGHT,
    PREFERRED_THEME.SYSTEM,
  ]}).notNull().default(PREFERRED_THEME.SYSTEM),
  sendEmail: integer('send_email', { mode: 'boolean' })
    .default(false)
})

export type UserSetting = typeof userSettings.$inferSelect
export type InsertUserSetting = typeof userSettings.$inferInsert
