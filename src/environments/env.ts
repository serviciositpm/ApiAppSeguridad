import {config} from "dotenv"

config();
export const PORT = process.env.PORT ?? 3000;
export const DB_NAME = process.env.DB_NAME!
export const DB_USER = process.env.DB_USER!
export const DB_PASS = process.env.DB_PASS!
export const DB_PORT = process.env.DB_PORT!
export const DB_HOST = process.env.DB_HOST!
export const PUBLIC_KEY = process.env.PUBLIC_KEY!
export const MONGO_URI=  process.env.MONGO_URI!
export const AD_URL= process.env.AD_URL!
export const AD_BASE_DN= process.env.AD_BASE_DN!
export const AD_USERNAME= process.env.AD_USERNAME!
export const AD_PASSWORD= process.env.AD_PASSWORD!