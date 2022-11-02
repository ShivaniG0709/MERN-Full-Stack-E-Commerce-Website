class ErrorHandler extends Error {
  //we inherit errorhander class from nodejs default class error
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorHandler;

//we have to create error.js middleware to use this file
