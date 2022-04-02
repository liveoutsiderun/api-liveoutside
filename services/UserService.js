/* eslint-disable camelcase */
const { User } = require('../models');

module.exports = {
  createUser: (name, email, birth_date, activitys, terms_conditions) => new User({
    name, email, birth_date, activitys, terms_conditions,
  }),
};
