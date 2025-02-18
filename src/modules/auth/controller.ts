import { Request } from "express";
import { ILogin } from "../../interfaces/Auth.interface";
import { AuthServices } from "./services";


export const validateUserController = async(req : Request)=>{
    try {
        const {username, password} = req.body as ILogin;
        return await new AuthServices().validateUser(username, password);
    } catch (error) {
        throw error;
    }
}