import { Request, Response, NextFunction } from "express";
const errorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const exeptions: Object = { notFoundError: 404, conflictError: 409 };
  res
    .status(exeptions[err.type] || err.response.status || 500)
    .send(err.response.statusText || "Internal Server Error");
};

interface Error {
  type: string;
  message: string;
  response: {
    status: number;
    statusText: string;
  };
}

export default errorHandlerMiddleware;
