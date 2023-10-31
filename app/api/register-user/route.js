import { NextResponse as res} from "next/server" 
import bcrypt from 'bcryptjs'
import connectDb from "@/server/utils/db"
import Users from "@/server/models/user"



export const POST = async (request)=>{

    try {
        const {name,email,password} = await request.json()
        const hashPassword = await bcrypt.hash(password,10)
        await connectDb()
        await Users.create({name,email,password : hashPassword})
        return res.json({
            success : true,
            message : 'success register user'
        })
    } catch (error) {
        return res.json({
            success : false,
            message : error.message
        },{status : 500})
    }

    

}