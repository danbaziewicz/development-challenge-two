export const validateName = (name) => {
    if(name) {
        if(name == "") {
            throw new Error('Nome vazio')
        } else if (name.length < 4) {
            throw new Error('Nome deve conter mais que 4 caracteres')
        }
    }else {
        throw new Error('Insira um nome')
    }
}

export const validateEmail  = (email) => {
    if (email) {
        if(!email.includes("@")){
            throw new Error("Email inválido, precisa conter @")
        }
    } else {
        throw new Error(`Insira um email ${email}`)
    }
}

export const validateDate = (birth_date) => {
    if (birth_date) {
        if(birth_date == '') {
            throw new Error('Data vazia')
        }
    } else {
        throw new Error(`Insira uma data ${birth_date}`)
    }
}

export const validateAddress = (address) => {
    if (address) {
        if (address == '') {
            throw new Error('Endereço vazio')
        }
    } else {
        throw new Error('Insira um endereço')
    }
}

export const createUser = (name, birth_date, email, addres) => {
    validateName(name)
    validateDate(birth_date)
    validateEmail(email)
    validateAddress(addres)

    return {
        "name": name,
        "birth_date": birth_date,
        "email": email,
        "address": addres
    }
}