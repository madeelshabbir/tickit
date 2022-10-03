import { ValidationError } from 'express-validator';
import { CustomError } from './custom_error';

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(private errors: ValidationError[]) {
    super();

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serialize() {
    return this.errors.map(error => {
      return { message: error.msg, field: error.param };
    });
  }
};
