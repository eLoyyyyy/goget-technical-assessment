import { Request, Response } from "express"
import { PREFERRED_THEME } from "../types/PreferredTheme"
import { UserSettings } from "../types/UserSettings"
import { UserId, UserIdSchema } from "../validation/UserId"
import { UserSettingsSchema } from "../validation/UserSettings"
import { UserSetting } from "../../db/schema"
import { SqliteUserSettingRepository } from "../data-source/SqliteUserSettingRepository"

export const _makeUpdateUserSettings = (
  validation: any,
  userSettingRepository: any
) => {
    return {
      execute(userId: UserSetting['id'], userSettings: UserSettings): Promise<void> {
        validation.parse(userSettings)

        return userSettingRepository.updateUserSetting(userId, userSettings)
      }
    }
}

export const UpdateUserSettings = _makeUpdateUserSettings(
    UserSettingsSchema,
    new SqliteUserSettingRepository()
)
