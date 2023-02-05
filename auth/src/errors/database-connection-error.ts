import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
  private reason = 'Error connecting to database';
  statusCode = 500;

  constructor() {
    super('Error connecting to db');

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serialize() {
    return [
      { message: this.reason }
    ]
  }
};
