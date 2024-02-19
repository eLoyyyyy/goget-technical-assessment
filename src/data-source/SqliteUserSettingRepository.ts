import { eq } from "drizzle-orm";
import { UserSetting, userSettings } from "../../db/schema";
import { db } from "../database";
import { UserSettings } from "../types/UserSettings";

export class SqliteUserSettingRepository {
  private db;
  private table;
  constructor() {
    this.db = db
    this.table = userSettings
  }

  getUserSetting(userId: UserSetting['userId']): UserSetting | undefined {
    return this.db.select()
      .from(this.table)
      .where(
        eq(this.table.userId, userId)
      )
      .get()
  }

  updateUserSetting(userId: UserSetting['userId'], userSetting: UserSettings) {
    return this.db.insert(this.table)
      .values({
        preferredTheme: userSetting.preferredTheme,
        sendEmail: userSetting.sendEmail
      })
  }
}
