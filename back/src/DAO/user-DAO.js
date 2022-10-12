import db from "../database/conect.js"

const daoUser = {
    getUsers: () => {
        const GET_USER = 'SELECT * FROM USERS'
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
        const GET_USER_ID = 'SELECT * FROM USERS WHERE id = ?'

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
        INSERT INTO USERS (name, birth_date, email, address)
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
        const UPDATE_USER = `UPDATE USERS
        SET name = ?,
        birth_date = ?,
        email = ?,
        address = ?
        WHERE id = ?`

        return new Promise((resolve, reject) => {
            db.query(UPDATE_USER, [newUser.name, newUser.birth_date, newUser.email, newUser.address, id],
                (error) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(newUser)
                    }
                })
        })
    },

    deleteUser: (id) => {
        const DELETE_USER = `DELETE FROM USERS WHERE id = ?`

        return new Promise((resolve, reject) => {
            db.query(DELETE_USER, id, (error, row) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(`User ${id} successfully deleted`)
                }
            })
        })
    }
}

export default daoUser