/* eslint-disable camelcase */
const { User } = require('../models');

module.exports = {
  createUser: (name, email, birth_date, activitys, terms_conditions, region) => new User({
    name, email, birth_date, activitys, terms_conditions, region,
  }),
};
