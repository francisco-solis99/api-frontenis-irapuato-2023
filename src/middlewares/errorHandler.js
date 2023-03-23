import AppError from '../errors/AppError.js';

const errorHandler = (err, req, res, next) => {
  // if no status or message in error use default 500 code and message
  const statusCode = err.status ?? 500;
  const message = err.message || 'Something went wrong.';

  if (err instanceof AppError) {
    const { message, statusCode } = err;
    return res.status(statusCode).json({
      message
    });
  }

  // returns error status code and message
  return res.status(statusCode).json({
    error: statusCode,
    message
  });
};

export default errorHandler;
