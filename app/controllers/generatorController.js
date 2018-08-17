module.exports = {
  search(req, res, next) {
    try {
      const dataForm = req.body;
      console.log(dataForm);
      return res.json(dataForm);
    } catch (error) {
      return next(error);
    }
  },
};
