import { Request, Response } from "express"
import { PREFERRED_THEME } from "../types/PreferredTheme"
import { UserSettings } from "../types/UserSettings"

export const GetUserSettings = {
    execute(userId: string): UserSettings {
        return {
            preferredTheme: PREFERRED_THEME.SYSTEM,
            resultsPerPage: 20,
            sendEmail: true
        }
    }

}
