import daoUser from "../DAO/user-DAO.js"

const userModel = {
    insertUser : async (user) => {
        return await daoUser.insertUser(user)
    },

    getUsers : async () => {
        return await daoUser.getUsers()
    },

    getUserId : async (id) => {
        return await daoUser.getUserId(id)
    },

    updateUser : async (id, newUser) => {
        const currrentUser = await userModel.getUserId(id)
        if (currrentUser) {
            const newData = {
                "name" : newUser.name || currrentUser.name,
                "birth_date" : newUser.birth_date || currrentUser.birth_date,
                "email" : newUser.email || currrentUser.email,
                "address" : newUser.address || currrentUser.address
            }
            return await daoUser.updateUser(id, newData)
        } else {
            throw new Error('User not found.')
        }
    },

    deleteUser: async (id) => {
        return await daoUser.deleteUser(id)
    }
}

export default userModel