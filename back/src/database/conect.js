import mysql from "mysql2"
import 'dotenv/config'

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "challenge_medcloud"
})

export default db