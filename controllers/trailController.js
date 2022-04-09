const AllRoutesDetail = require('../static/AllRoutesDetail.json');
const AllRoutesBasic = require('../static/AllRoutesBasic.json');

module.exports = {
  getTrailsBasic: async (req, res) => {
    try {
      res.status(200).send(AllRoutesBasic);
    } catch (error) {
      res.status(404).send({
        msg: 'Contact the administrator',
      });
    }
  },
  getTrailById: async (req, res) => {
    const { id } = req.params;
    const trail = AllRoutesDetail.find(
      (route) => route.id === Number(id),
    );
    try {
      res.status(200).send(trail);
    } catch (error) {
      res.status(404).send({
        msg: 'Contact the administrator',
      });
    }
  },
};
