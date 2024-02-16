import { Request, Response } from 'express'

export const Ping = {
    execute() {
        return {
            timestamp: Date.now()
        }
    }
}