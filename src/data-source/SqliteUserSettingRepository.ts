import { eq } from "drizzle-orm";
import { InsertUserSetting, UserSetting, userSettings } from "../../db/schema";
import { db } from "../database";
import { UserSettings } from "../types/UserSettings";

export class SqliteUserSettingRepository {
  private db;
  private table;
  constructor() {
    this.db = db
    this.table = userSettings
  }

  async getUserSetting(userId: UserSetting['userId']): Promise<UserSetting | null> {
    if (!userId) {
      return null
    }

    const result = await this.db.select()
      .from(this.table)
      .where(
        eq(this.table.userId, userId)
      )

    return result.length <= 0
        ? null
        : result[0]
  }

  async updateUserSetting(userId: UserSetting['userId'], userSetting: any) {
    if (!userId) {
      return null
    }

    return this.db.update(this.table)
      .set({
        preferredTheme: userSetting.preferredTheme,
        sendEmail: userSetting.sendEmail
      })
      .where(
        eq(this.table.userId, userId)
      )
  }
}
