import mongoose,{Schema,models} from "mongoose";


const userDataSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
},{timestamps : true})


const Users = mongoose.models.Users || mongoose.model('Users',userDataSchema)

export default Users;