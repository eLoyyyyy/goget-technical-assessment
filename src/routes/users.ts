import express, { Request, Response } from "express";
import { GetUserSettings } from "../usecase/GetUserSettings";
import { UserSettings } from "../types/UserSettings";

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
userRouter.get('/:userId/settings', (req: Request, res: Response) => {
    const { userId } = req.query
    const result: UserSettings = GetUserSettings.execute(userId)
    console.log(result)
    res.status(200).json(result)
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
userRouter.put('/:userId/settings', (req: Request, res: Response) => {

})
