function ErrorResponse(error) {
    this.error = error;
}
ErrorResponse.prototype.NotImplementedError = function() {
    Error.captureStackTrace(this, this.constructor);
    var errorData = {};
    errorData.errorCode = 1;
    errorData.errorMessage = "Not Implemented";
    return errorData;
}

ErrorResponse.prototype.InvalidSessionError = function() {
    Error.captureStackTrace(this, this.constructor);
    var errorData = {};
    errorData.errorCode = 400;
    errorData.errorMessage = "Invalid Session Error";
    return errorData;
}

ErrorResponse.prototype.NotFoundError = function() {
    Error.captureStackTrace(this, this.constructor);
    var errorData = {};
    errorData.errorCode = 404;
    errorData.errorMessage = "Not Found";
    return errorData;
}
ErrorResponse.prototype.SystemError = function(original_error) {
    Error.captureStackTrace(this, this.constructor);
    var errorData = {};
    errorData.errorCode = 500;
    errorData.errorMessage = "System Error";
    return errorData;
}
module.exports = ErrorResponse;