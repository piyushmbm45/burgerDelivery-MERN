const { DEBUG_MODE } = require("../config/index.js");
const pkg = require("joi");
const { CustomErrorHandler } = require("../services/CustomErrorHandler");

const { ValidationError } = pkg;

const errorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let data = {
    message: "internal server error",
    ...(DEBUG_MODE === "true" && { originalError: err.message }),
  };
  if (err instanceof ValidationError) {
    statusCode = 422;
    data = {
      message: err.message,
    };
  }
  if (err instanceof CustomErrorHandler) {
    statusCode = err.statusCode;
    data = {
      message: err.message,
    };
  }
  return res.status(statusCode).json(data);
};

module.exports = errorHandler;
