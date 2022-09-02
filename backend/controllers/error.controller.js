const errorHandler = (error, req, res, next) => {
  const isDevelopment = process.env.NODE_ENV === "development";
  const statusCode = res.statusCode || 500;

  res.status(statusCode).json({
    message: error.message,
    validationErrors: req?.validationErrors || undefined,
    stack: isDevelopment ? error.stack : undefined,
  });
};

module.exports = errorHandler;
