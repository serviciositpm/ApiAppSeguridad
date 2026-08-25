import { createServer } from "./infrastructure/http/server";
import { connectMongoDB } from "./infrastructure/database/mongo/MongoConnection";
import { checkSqlConnection } from "./infrastructure/database/sql/SqlConnectionPool";
import { PORT } from "./infrastructure/config/env";

async function bootstrap() {
  await connectMongoDB();

  try {
    await checkSqlConnection();
  } catch (error) {
    console.error("❌ Error al conectar a la base de datos SQL Server:", error);
  }

  const app = createServer();
  const port = Number(PORT);

  app.listen(port, () => {
    console.log("El servidor esta levantado en el puerto:", port);
  });
}

bootstrap();
