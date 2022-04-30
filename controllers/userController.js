/* eslint-disable camelcase */
const { createUser } = require('../services/UserService');
const { generateJWT } = require('../helpers/generate-token');
const { onlyDateInformatISO } = require('../helpers/manipulate-date');
const { User } = require('../models');

module.exports = {
  create: async (req, res) => {
    const {
      name, email, birth_date, activitys, terms_conditions, region,
    } = req.body;
    const emailLowerCase = email.toLowerCase();
    const birthDateISO = onlyDateInformatISO(birth_date);
    try {
      // Verification if email exist
      const isUser = await User.findOne({ email });
      if (isUser) {
        return res.status(400).send({
          message: 'El usuario ya existe en nuestra base de datos',
        });
      }
      if (!terms_conditions) {
        return res.status(400).send({
          message: 'Revisa nuestros términos y condiciones',
        });
      }
      const user = createUser(
        name,
        emailLowerCase,
        birthDateISO,
        activitys,
        terms_conditions,
        region,
      );
      await user.save();
      // Generate JWT
      const token = await generateJWT(user.id, user.role);
      return res.status(200).send({ token });
    } catch (error) {
      console.log(error);
      return res.status(404).send({
        message: 'Contact the administrator',
      });
    }
  },
};
