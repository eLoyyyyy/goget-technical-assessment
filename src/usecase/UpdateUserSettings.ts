import { Request, Response } from "express"
import { PREFERRED_THEME } from "../types/PreferredTheme"
import { UserSettings } from "../types/UserSettings"
import { UserId, UserIdSchema } from "../validation/UserId"
import { UserSettingsSchema } from "../validation/UserSettings"

export const _makeUpdateUserSettings = (validation: any) => {
    return {
      execute(userSettings: UserSettings): Promise<UserSettings> {
        validation.parse(userSettings)

        // TODO: save to database

        return Promise.resolve({
            preferredTheme: PREFERRED_THEME.SYSTEM,
            resultsPerPage: 20,
            sendEmail: true
        })
      }
    }
}

export const UpdateUserSettings = _makeUpdateUserSettings(
    UserSettingsSchema
)
