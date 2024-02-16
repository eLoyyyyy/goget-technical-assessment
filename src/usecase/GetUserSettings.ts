import { Request, Response } from "express"
import { PREFERRED_THEME } from "../types/PreferredTheme"
import { UserSettings } from "../types/UserSettings"
import { UserId, UserIdSchema } from "../validation/UserId"

export const _makeGetUserSettings = () => {
    return {
      execute(userId: UserId): Promise<UserSettings> {
        // TODO: check if user exists

        return Promise.resolve({
            preferredTheme: PREFERRED_THEME.SYSTEM,
            resultsPerPage: 20,
            sendEmail: true
        })
      }
    }
}

export const GetUserSettings = _makeGetUserSettings()
