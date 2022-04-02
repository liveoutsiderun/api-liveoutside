const { generateJWT } = require('../helpers/generate-token');
const { User } = require('../models');

module.exports = {
  login: async (req, res) => {
    const { email } = req.body;
    try {
      // Verification if email exist
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send({
          message: 'El usuario no existe en nuestra base de datos',
        });
      }
      // The user is active
      if (!user.status) {
        return res.status(400).send({
          message: 'Usuario bloqueado, contáctate con el administrador',
        });
      }
      // Generate JWT
      const token = await generateJWT(user.id, user.role);

      return res.status(200).send({ token });
    } catch (error) {
      console.log(error);
      return res.status(404).send({
        message: 'Ocurrio un error, contáctate con el administrador',
      });
    }
  },
};
