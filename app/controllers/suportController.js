const mongoose = require('mongoose');

const Suport = mongoose.model('Suport');

module.exports = {
  async suport(req, res, next) {
    try {
      const dataForm = req.body;
      const suport = await Suport.create(dataForm);
      console.log('Suporte criado com sucesso');
      return res.json(suport);
    } catch (err) {
      return next(err);
    }
  },

  async getSuports(req, res, next) {
    try {
      const suports = await Suport.find();
      return res.json({ suports, total: suports.length });
    } catch (err) {
      return next(err);
    }
  },
  async getSuportsIsOpen(req, res, next) {
    try {
      const suports = await Suport.find({ status: true });
      return res.json({ suports, total: suports.length });
    } catch (err) {
      return next(err);
    }
  },
  async getSuportsIsClosed(req, res, next) {
    try {
      const suports = await Suport.find({ status: false });
      return res.json({ suports, total: suports.length });
    } catch (err) {
      return next(err);
    }
  },
  async toggleStatus(req, res, next) {
    try {
      const suport = await Suport.findById(req.params.id);

      if (!suport) {
        return res.status(400).json({ error: 'Suport not search' });
      }

      if (suport.status) {
        suport.status = false;
      } else {
        suport.status = true;
      }

      await suport.save();

      return res.json(suport);
    } catch (error) {
      return next(error);
    }
  },
};
