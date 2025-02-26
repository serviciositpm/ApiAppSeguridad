import dotenv from "dotenv";
import { AD_BASE_DN, AD_PASSWORD, AD_URL, AD_USERNAME } from "../environments/env";

dotenv.config();

export const configAD = {
    AD_URL: AD_URL ,
    AD_BASE_DN: AD_BASE_DN ,
    AD_USER: AD_USERNAME ,
    AD_PASSWORD: AD_PASSWORD 
};