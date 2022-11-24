const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  //send response
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});
exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'failure',
    message: 'This route has not been defined',
  });
};
exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'failure',
    message: 'This route has not been defined',
  });
};
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'failure',
    message: 'This route has not been defined',
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'failure',
    message: 'This route has not been defined',
  });
};
