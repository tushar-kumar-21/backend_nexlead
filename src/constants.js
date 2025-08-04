export const APP_NAME = 'NexLead Backend';
export const apiResponse = (res, statusCode = 200, message = "Success", data = {}) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export const apiError = (res, statusCode = 500, message = "Something went wrong", error = {}) => {
  return res.status(statusCode).json({
    success: false,
    message,
    error: error.message || error,
  });
};
