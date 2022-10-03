import { CustomError } from './custom_error';

export class DatabaseConnectionError extends CustomError {
  private reason = 'Error connecting to database';
  statusCode = 500;

  constructor() {
    super();

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serialize() {
    return [
      { message: this.reason }
    ]
  }
};
