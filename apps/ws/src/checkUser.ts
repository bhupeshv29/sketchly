import { JWT_SECRET } from "@repo/backend-common/config"
import jwt from "jsonwebtoken"
import "dotenv/config"

export const  checkUser = (token: string) : string | null => {
    

    const decoded = jwt.verify(token ,JWT_SECRET! || "123123") as {userId :string}
 
    
    

    if(decoded){
        return decoded.userId
    }
    else {
        return null
    }


}
