class CustomErrorHandler extends Error {
  constructor(status, msg) {
    super();
    this.status = status;
    this.message = msg;
  }
  //   here we are creating static method because we dont need to create object to call a class it call automatically
  static alreadyExist(message) {
    return new CustomErrorHandler(409, message);
  }
  static notFound(message = "404 Not Found") {
    return new CustomErrorHandler(404, message);
  }

  static wrongCredentials(message) {
    return new CustomErrorHandler(
      401,
      (message = "username or password is wrong")
    );
  }
  // default message or value given to function
  static unAuthorized(message = "unAuthorized") {
    return new CustomErrorHandler(401, message);
  }
  static serverError(message = "Internal Server Error") {
    return new CustomErrorHandler(500, message);
  }
}
export default CustomErrorHandler;
