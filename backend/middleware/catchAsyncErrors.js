module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
};
//this works as try catch block. if resolve fails then it gives error. so we dont need to write try catch everytime
//promise is inbuilt class of js
