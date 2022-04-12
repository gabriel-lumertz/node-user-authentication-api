import express from 'express'
import bearerAuthenticationMiddleware from './middlewares/jwt-authentication.middleware'
import errorHandler from './middlewares/error-handler.middleware'
import authorizationRoute from './routes/authorization.route'
import statusRoute from './routes/status.route'
import usersRoute from './routes/users.route'
import jwtAuthenticationMiddleware from './middlewares/jwt-authentication.middleware'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(statusRoute)
app.use(authorizationRoute)
app.use(jwtAuthenticationMiddleware)
app.use(usersRoute)

app.use(errorHandler)


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})