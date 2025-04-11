const Notification = require('../models/Notification');

exports.getNotifications = async (req, res) => {
  const { neighborhood } = req.user;
  const notifications = await Notification.find({ neighborhood });
  res.json(notifications);
};

exports.createNotification = async (req, res) => {
  const { title, message, neighborhood } = req.body;
  const notification = new Notification({ title, message, neighborhood });
  await notification.save();
  res.status(201).json(notification);
};
