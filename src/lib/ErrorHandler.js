const errorHandler = (err, defaultMsg = "Something went wrong") => {
  const errorMessage = err?.response?.data?.message || defaultMsg;

  throw new Error(errorMessage);
};

export default errorHandler;
