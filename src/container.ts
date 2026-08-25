// Composition root: aquí, y SOLO aquí, se instancian las implementaciones
// concretas de infraestructura y se inyectan en los casos de uso y
// controladores. Si mañana cambias de SQL Server a PostgreSQL, o de LDAP a
// otro proveedor, este es el único archivo que toca cambiar.

import { SqlAuthRepository } from "./infrastructure/repositories/SqlAuthRepository";
import { SqlPeopleRepository } from "./infrastructure/repositories/SqlPeopleRepository";
import { SqlDocsRepository } from "./infrastructure/repositories/SqlDocsRepository";
import { MongoLogRepository } from "./infrastructure/repositories/MongoLogRepository";
import { LdapUserADRepository } from "./infrastructure/repositories/LdapUserADRepository";
import { JwtTokenService } from "./infrastructure/security/JwtTokenService";

import { ValidateUserUseCase } from "./application/use-cases/auth/ValidateUserUseCase";
import { GetDataPeopleUseCase } from "./application/use-cases/people/GetDataPeopleUseCase";
import { GetDataPeopleSecurityUseCase } from "./application/use-cases/people/GetDataPeopleSecurityUseCase";
import { GetDataEmployeesUseCase } from "./application/use-cases/people/GetDataEmployeesUseCase";
import { GetDataSupplierUseCase } from "./application/use-cases/people/GetDataSupplierUseCase";
import { GetDataParkingUseCase } from "./application/use-cases/people/GetDataParkingUseCase";
import { GetUrlDocsUseCase } from "./application/use-cases/docs/GetUrlDocsUseCase";
import { GetTideUseCase } from "./application/use-cases/docs/GetTideUseCase";
import { GetContainerUseCase } from "./application/use-cases/docs/GetContainerUseCase";
import { GetDataDocsUseCase } from "./application/use-cases/docs/GetDataDocsUseCase";
import { CreateLogUseCase } from "./application/use-cases/logs/CreateLogUseCase";
import { GetRecentLogsUseCase } from "./application/use-cases/logs/GetRecentLogsUseCase";
import { GetADUserUseCase } from "./application/use-cases/user-ad/GetADUserUseCase";

import { AuthController } from "./presentation/http/controllers/AuthController";
import { PeopleController } from "./presentation/http/controllers/PeopleController";
import { DocsController } from "./presentation/http/controllers/DocsController";
import { LogController } from "./presentation/http/controllers/LogController";
import { UserADController } from "./presentation/http/controllers/UserADController";

// --- Infraestructura ---
const authRepository = new SqlAuthRepository();
const peopleRepository = new SqlPeopleRepository();
const docsRepository = new SqlDocsRepository();
const logRepository = new MongoLogRepository();
const userADRepository = new LdapUserADRepository();
const tokenService = new JwtTokenService();

// --- Casos de uso ---
const validateUserUseCase = new ValidateUserUseCase(authRepository, tokenService);

const getDataPeopleUseCase = new GetDataPeopleUseCase(peopleRepository);
const getDataPeopleSecurityUseCase = new GetDataPeopleSecurityUseCase(peopleRepository);
const getDataEmployeesUseCase = new GetDataEmployeesUseCase(peopleRepository);
const getDataSupplierUseCase = new GetDataSupplierUseCase(peopleRepository);
const getDataParkingUseCase = new GetDataParkingUseCase(peopleRepository);

const getUrlDocsUseCase = new GetUrlDocsUseCase(docsRepository);
const getTideUseCase = new GetTideUseCase(docsRepository);
const getContainerUseCase = new GetContainerUseCase(docsRepository);
const getDataDocsUseCase = new GetDataDocsUseCase(docsRepository);

export const createLogUseCase = new CreateLogUseCase(logRepository);
const getRecentLogsUseCase = new GetRecentLogsUseCase(logRepository);

const getADUserUseCase = new GetADUserUseCase(userADRepository);

// --- Controladores (listos para inyectarse en las rutas) ---
export const authController = new AuthController(validateUserUseCase);

export const peopleController = new PeopleController(
  getDataPeopleUseCase,
  getDataPeopleSecurityUseCase,
  getDataEmployeesUseCase,
  getDataSupplierUseCase,
  getDataParkingUseCase
);

export const docsController = new DocsController(
  getUrlDocsUseCase,
  getTideUseCase,
  getContainerUseCase,
  getDataDocsUseCase
);

export const logController = new LogController(createLogUseCase, getRecentLogsUseCase);

export const userADController = new UserADController(getADUserUseCase);
