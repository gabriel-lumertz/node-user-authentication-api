import { Request, Response, NextFunction, Router } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";

const authorizationRoute = Router()

authorizationRoute.post('/token', (req: Request, res: Response, next: NextFunction) => {
    
    try {
        const authorizationHeader = req.headers['authorization']
    
        if (!authorizationHeader) {
            throw new ForbiddenError('Credencias não informadas')
        }

        const [authenticationType, token] = authorizationHeader.split(' ')

        if (authenticationType !== 'Basic' || !token) {
            throw new ForbiddenError('Tipo de autenticação inválido')
        }

        const tokenContent = Buffer.from(token, 'base64').toString('utf-8')
        
        const [username, password] = tokenContent.split(':')

        if (!username || !password) {
            throw new ForbiddenError('Credenciais não preenchidas')
        }

    } catch (error) {
        next(error)    
    }
})

export default authorizationRoute