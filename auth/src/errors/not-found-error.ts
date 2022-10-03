import { CustomError } from './custom_error';

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super();

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serialize() {
    return [
      { message: 'Not Found' }
    ];
  }
}
