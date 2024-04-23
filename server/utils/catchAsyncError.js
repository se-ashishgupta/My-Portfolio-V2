export const catchAsyncError = (callBackFuntion) => (req, res, next) => {
  Promise.resolve(callBackFuntion(req, res, next)).catch(next);
};
