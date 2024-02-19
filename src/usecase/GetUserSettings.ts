import { Request, Response } from "express"
import { PREFERRED_THEME } from "../types/PreferredTheme"
import { UserSettings } from "../types/UserSettings"
import { UserId, UserIdSchema } from "../validation/UserId"
import { BetterSQLite3Database } from "drizzle-orm/better-sqlite3"
import { db } from "../database"
import { userSettings } from "../../db/schema"
import { NoUserFound } from "../error/NoUserFound"
import { SqliteUserSettingRepository } from "../data-source/SqliteUserSettingRepository"

export const _makeGetUserSettings = (
  userSettingRepository: any
) => {
    return {
      async execute(userId: UserId): Promise<UserSettings> {
        const userSettings = await userSettingRepository.getUserSetting(userId)

        if (!userSettings) {
          throw new NoUserFound(userId)
        }

        return Promise.resolve({
            preferredTheme: userSettings.preferredTheme,
            resultsPerPage: 20,
            sendEmail: userSettings.sendEmail
        })
      }
    }
}

export const GetUserSettings = _makeGetUserSettings(
  new SqliteUserSettingRepository()
)
