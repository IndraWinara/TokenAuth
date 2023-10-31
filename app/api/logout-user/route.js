import { NextResponse } from "next/server";


export async function GET(request) {
    try {
        const token = request.cookies.get("token")?.value || '';
        if(!token){
            return NextResponse.json({
                success : false,
                message : 'Unauthorize User'
            })
        }
        const response = NextResponse.json(
            {
                message: "Logout successful",
                success: true,
            }
        )
        response.cookies.delete('token');
        return response;
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
        
    }