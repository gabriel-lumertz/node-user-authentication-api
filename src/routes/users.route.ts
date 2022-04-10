import { Router, Request, Response, NextFunction } from "express";

const usersRoute = Router()

usersRoute.get('/', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: 'Gabriel'}]
    res.status(200).send(users)
})

usersRoute.get('/users/:uuid', (req: Request<{ uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid
    res.status(200).send({ uuid })
})

export default usersRoute