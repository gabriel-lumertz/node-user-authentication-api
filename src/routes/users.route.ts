import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes'

const usersRoute = Router()

usersRoute.get('/', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: 'Gabriel'}]
    res.status(StatusCodes.OK).send(users)
})

usersRoute.get('/users/:uuid', (req: Request<{ uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid
    res.status(StatusCodes.OK).send({ uuid })
})

export default usersRoute