import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization

    if (! authToken) {
        return response.status(401).end()
    }

    const [,token] = authToken.split(" ")
    
    try {
        const { sub } = verify(token, "c6f41e03112205e5549d4ed20a5fa7de")
        
        request.user_id = sub.toString()
    } catch (error) {
        return response.status(401).end()
    }


    return next()
}