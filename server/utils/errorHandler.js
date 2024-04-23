class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
    // The Error.captureStackTrace method is used to provide a stack trace that excludes the constructor call from the stack trace itself, making it easier to trace the origin of the error.
  }
}

export default ErrorHandler;
