import jwt from "jsonwebtoken";

export const getDataFromToken = (request) => {
    try {
        const token = request.cookies.get("token")?.value || '';     
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);   
        return decodedToken._id;
    } catch (error) {
        throw new Error(error.message);
    }

}

export const sendToken = (userId)=>{
    const token = jwt.sign({_id : userId},process.env.TOKEN_SECRET,{expiresIn : '1d'})
    return token
}