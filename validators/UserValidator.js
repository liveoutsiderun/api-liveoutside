const { celebrate, Joi } = require('celebrate');

module.exports = {
  UserCreateValidator: celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      birth_date: Joi.date().required(),
      activitys: Joi.array().min(0).max(5),
      terms_conditions: Joi.boolean().required(),
    }),
  }),
};
