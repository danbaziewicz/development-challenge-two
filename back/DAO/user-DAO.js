import db from "../database/conect.js"

const daoUser = {
    getUsers: () => {
        const GET_USER = `SELECT id, name, DATE_FORMAT(birth_date,'%Y-%m-%d') as birth_date, email, address FROM users`
        return new Promise((resolve, reject) => {
            db.query(GET_USER, (error, row) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(row)
                }
            })
        })
    },

    getUserId: (id) => {
        const GET_USER_ID = 'SELECT * FROM users WHERE id = ?'

        return new Promise((resolve, reject) => {
            db.query(GET_USER_ID, id, (error, row) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(row)
                }
            })
        })
    },

    insertUser: (user) => {
        const INSERT_USER = `
        INSERT INTO users (name, birth_date, email, address)
        VALUES (?, ?, ?, ?)
        `

        return new Promise((resolve, reject) => {
            db.query(INSERT_USER, [user.name, user.birth_date, user.email, user.address],
                (error) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(user)
                    }
                }
            )
        })
    },

    updateUser: (id, newUser) => {
        const UPDATE_USER = `UPDATE users SET name = ?, birth_date = ?, email = ?, address = ? WHERE id = ?`

        return executeQuery(
            UPDATE_USER,
            [
                newUser.name,
                newUser.birth_date,
                newUser.email,
                newUser.address,
                id
            ],
            `User ${id} successfully updated`
        )
    },

    deleteUser: (id) => {
        const DELETE_USER = `DELETE FROM users WHERE id = ?`

        return executeQuery(DELETE_USER, id, `User ${id} successfully deleted`)
    }
}

const executeQuery = (query, params, msg) => {
    return new Promise((resolve, reject) => {
        db.query(query, params, (error, row) => {
            if (error) {
                reject(error)
            } else {
                resolve(msg)
            }
        })
    })
}

export default daoUser