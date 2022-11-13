class CustomErrorHandler extends Error {
  constructor(status, msg) {
    super();
    this.status = status;
    this.message = msg;
  }
  static alreadyExists(msg) {
    return new CustomErrorHandler(409, msg);
  }
}

export default CustomErrorHandler;
