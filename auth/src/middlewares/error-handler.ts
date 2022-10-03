import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom_error';

export const errorHanlder = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).send({ errors: err.serialize() });
  }

  res.status(400).send({ errors: [ { message: 'Something went wrong' } ] });
};
