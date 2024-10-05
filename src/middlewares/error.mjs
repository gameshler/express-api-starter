const errorHandler = (err, req, res, next) => {
  const statusCode = res.status !== 200 ? res.status : 500;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export default errorHandler;
