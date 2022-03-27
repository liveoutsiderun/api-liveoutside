/* eslint-disable camelcase */
const { createUser } = require('../services/UserService');
const { generateJWT } = require('../helpers/generate-token');

module.exports = {
  create: async (req, res) => {
    const {
      name, email, birth_date, activitys,
    } = req.body;
    const user = createUser(name, email, birth_date, activitys);
    try {
      await user.save();
      // Generate JWT
      const token = await generateJWT(user.id, user.role);
      res.status(200).send({ token, message: 'User creado' });
    } catch (error) {
      console.log(error);
      res.status(404).send({
        msg: 'Contact the administrator',
      });
    }
  },
};
