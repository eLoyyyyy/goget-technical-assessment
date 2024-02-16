import express, { Request, Response } from "express";
import { Ping } from "../usecase/Ping";

export const pingRouter = express.Router()

/**
 * @openapi
 * /ping:
 *   get:
 *     description: Returns a structure that contains a timestamp
 *     responses:
 *       200:
 *         description: Returns a timestamp object.
 *         content:
 *              application/json:
 *                  schema:
 *                      timestampObject:
 *                          type: object
 *                          properties:
 *                              timestamp:
 *                                  type: number
 *                                  description: current time in epoch
 */
pingRouter.get('/ping', (req: Request, res: Response) => {
    const result = Ping.execute()
    return res.json(result)
})
