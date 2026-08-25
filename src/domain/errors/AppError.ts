// Errores de negocio, independientes de Express, SQL o Mongo.
// La capa de presentación (controllers) los traduce a códigos HTTP.

export class AppError extends Error {
  constructor(message: string, public readonly statusCode: number = 500) {
    super(message);
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = "Recurso no encontrado") {
    super(message, 404);
  }
}

export class ValidationDomainError extends AppError {
  constructor(message: string = "Datos inválidos") {
    super(message, 400);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = "No autorizado") {
    super(message, 401);
  }
}
