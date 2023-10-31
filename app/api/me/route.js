import Users from "@/server/models/user";
import connectDb from "@/server/utils/db";
import { getDataFromToken } from "@/server/utils/jwt";
import { NextResponse } from "next/server";


export async function GET(request){

    try {
        const userId = await getDataFromToken(request);
        await connectDb()
        const user = await Users.findOne({_id: userId}).select("-password");
        return NextResponse.json({
            success : true,
            message: "User founded",
            data: user
        })
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}