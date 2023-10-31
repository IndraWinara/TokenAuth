import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import connectDb from "@/server/utils/db";
import Users from "@/server/models/user";
import { sendToken } from "@/server/utils/jwt";

export const POST = async (request,res) => { 
    const {email, password} = await request.json()
    await connectDb()
    const user = await Users.findOne({email})
    if (!user) {
        return NextResponse.json({
            success: false,
            message: `invalid credentials`
        })
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
  
    if (isPasswordMatch === false) {
        return NextResponse.json({
            success: false,
            message: `invalid credentials`
        })
    }

    const token = sendToken(user.id)

    const response = NextResponse.json({
        message: "Login successful",
        success: true,
    })
    response.cookies.set("token", token, {
        httpOnly: true, 
        
    })
    return response
}
