const AllRoutes = require('../static/AllRoutes.json');

module.exports = {
  getTrailId: async (req, res) => {
    const { id } = req.params;
    const trail = AllRoutes.filter(
      (route) => route.id === Number(id),
    );
    try {
      res.status(200).send({ trail });
    } catch (error) {
      res.status(404).send({
        msg: 'Contact the administrator',
      });
    }
  },
};
