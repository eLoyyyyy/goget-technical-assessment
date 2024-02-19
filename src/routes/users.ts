import express, { Request, Response } from "express";
import { GetUserSettings } from "../usecase/GetUserSettings";
import { UserSettings } from "../types/UserSettings";
import { NoUserFound } from "../error/NoUserFound";
import { UpdateUserSettings } from "../usecase/UpdateUserSettings";
import { z } from "zod";

export const userRouter = express.Router()
/**
 *  @openapi
 *  components:
 *      schemas:
 *          PreferredTheme:
 *              type: string
 *              enum:
 *                  - light
 *                  - dark
 *                  - system
 *          UserSettings:
 *              type: object
 *              properties:
 *                  preferredTheme:
 *                      type: string
 *                      default: 'system'
 *                      oneOf:
 *                          - $ref: '#/components/schemas/PreferredTheme'
 *                  sendEmail:
 *                      type: boolean
 *                      default: true
 *                  resultsPerPage:
 *                      type: integer
 *                      minimum: 20
 *                      maximum: 100
 *                      default: 20
 *
 */

/**
 *  @openapi
 *  /user/{userId}/settings:
 *      summary: Returns a JSON structure with the current values of the user’s settings
 *      get:
 *          parameters:
 *              -   in: path
 *                  name: userId
 *                  schema:
 *                      type: string
 *                  required: true
 *                  description: ID of the user to get
 *          responses:
 *            '200':
 *              content:
 *                application/json:
 *                    schema:
 *                        $ref: '#/components/schemas/UserSettings'
 */
userRouter.get('/:userId/settings', async (req: Request, res: Response) => {
    const userId = req.params.userId
    try {

      const result: UserSettings = await GetUserSettings.execute(userId)

      return  res.status(200).json(result)
    } catch (e) {
      console.log(e)
      if (e instanceof NoUserFound) {
        return res.status(400).json('Error')
      } else {
        console.error(e)
        return res.status(500).json('Error')
      }
    }
})

/**
 * @openapi
 * /user/{userId}/settings:
 *      summary: Receives a multifield form or a JSON body to update the user’s settings
 *      put:
 *          parameters:
 *              -   in: path
 *                  name: userId
 *                  schema:
 *                      type: string
 *                  required: true
 *                  description: ID of the user to get
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/UserSettings'
 *          responses:
 *                '200':
 *                  content:
 *                    application/json:
 *                        schema:
 *                            $ref: '#/components/schemas/UserSettings'
 */
userRouter.put('/:userId/settings', async (req: Request, res: Response) => {
  const userId = req.params.userId
  try {
    console.log({ userId, body: req.body})
    await UpdateUserSettings.execute(Number(userId), req.body)

    return res.status(201).send()
  } catch (e) {
    console.log(e)
    if (e instanceof z.ZodError) {
      return res.status(400).json(e.issues)
    } else {
      return res.status(500)
    }
  }
})
