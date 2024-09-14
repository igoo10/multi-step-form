import model from "../model/form-model";
// Create User 
const createUser = async(userDetailsSchema) => {
    try {
        const createUser = await model.create(userDetailsSchema)
        return createUser 
    } catch (error) {
        throw new Error(error.message)
    }
}

export default {createUser}
