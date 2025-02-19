import { Request } from "express";
import { PeopleServices } from "./services";

export const getDataPeopleController = async(req: Request)=>{
    try {
        return await new PeopleServices().getDataPeople();
    } catch (error) {
        throw error;
    }
}  
