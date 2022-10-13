import userModel from "../model/user-model.js"
import { createUser } from "../services/valida-user.js"

const userController = (app) => {
    
    app.get('/', (req, res) => {
        res.send(`API CHALLENGE MEDCLOUD`)
    })

    app.get('/users', async (req, res) => {
        try {
            const allUsers = await userModel.getUsers()
            res.json({
                users: allUsers,
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "error": true
            })
        }
    })

    app.get('/users/id/:id', async (req, res) => {
        const userId = req.params.id
        try {
            const user = await userModel.getUserId(userId)
            res.json({
                "usuário": user,
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "error": true
            })
        }
    })

    app.post('/users', async (req,res) => {
        const body = req.body
        console.log(body)
        try {
            const newUser = createUser(body.name, body.birth_date, body.email, body.address)
            await userModel.insertUser(newUser)
            res.json({
                "msg": "Usuário inserido com sucesso",
                "user": newUser,
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "error": true
            })
        }
    })

    app.delete('/users/id/:id', async (req, res) => {
        const id = req.params.id
        try {
            await userModel.deleteUser(id)
            res.json({
                "msg": `Usuário ${id} deletado com sucesso`,
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "error": true
            })

        }
    })

    app.put('/users/id/:id', async (req, res) => {
        const body = req.body
        const id = req.params.id
        try {
            const newUser = createUser(body.name, body.birth_date, body.email, body.address)
            await userModel.updateUser(id, newUser)
            res.json({
                "msg": "Usuário atualizado com sucesso",
                "user": newUser,
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })
}

export default userController