class ErrorHandler {
  handle(error, req, res, next) {
    if (error) {
      res.status(error.status).send(error.message);
    }
  }
}

const errorHandler = new ErrorHandler();

export default errorHandler;
