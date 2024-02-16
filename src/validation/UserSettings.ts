import { z } from 'zod'
import { PREFERRED_THEME } from '../types/PreferredTheme'

export const UserSettingsSchema = z.object({
  preferredTheme: z.enum([
    PREFERRED_THEME.DARK,
    PREFERRED_THEME.LIGHT,
    PREFERRED_THEME.SYSTEM,
  ]),
  sendEmail: z.boolean().default(true),
  resultsPerPage: z.number()
    .gte(20)
    .lte(100)
    .default(20)
})
