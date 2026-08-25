import sql from "mssql";
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from "./env";

const sqlConfig: sql.config = {
  user: DB_USER,
  password: DB_PASS,
  server: DB_HOST,
  database: DB_NAME,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export default sqlConfig;
