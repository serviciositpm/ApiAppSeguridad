import sql from "mssql";
import sqlConfig from "../../config/sqlConfig";

// El código original hacía sql.connect(dbConfig) en CADA método de CADA
// repositorio, abriendo una conexión nueva por request. Aquí se reutiliza
// un único pool para toda la app (patrón recomendado por el driver mssql).
let pool: sql.ConnectionPool | null = null;

export async function getSqlPool(): Promise<sql.ConnectionPool> {
  if (pool && pool.connected) {
    return pool;
  }
  pool = await new sql.ConnectionPool(sqlConfig).connect();
  return pool;
}

export async function checkSqlConnection(): Promise<void> {
  const connectedPool = await getSqlPool();
  console.log("✅ Conexión exitosa a la base de datos SQL Server");
  void connectedPool;
}

export { sql };
