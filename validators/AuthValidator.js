const { celebrate, Joi } = require('celebrate');

module.exports = {
  EmailValidator: celebrate({
    body: Joi.object().keys({
      email: Joi.string().email().required(),
    }),
  }),
};
