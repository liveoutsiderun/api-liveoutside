/* eslint-disable camelcase */
const { User } = require('../models');

module.exports = {
  create: async (req, res) => {
    const {
      name, email, date_birth, activity,
    } = req.body;
    const user = new User({
      name, email, date_birth, activity,
    });
    try {
      await user.save();
      res.status(200).send(user);
    } catch (error) {
      res.status(404).send(error);
    }
  },
};
