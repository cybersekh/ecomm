import categories from '../models/categoriesModel.js';
import assert from 'assert';
class CategoriesController {
  static getAll = async (_req, res) => {
        const resp = await categories.find().exec();
        res.status(200).json(resp);
    };

    static getById = async (req, res) => {
        try {
            const id = req.params.id;
            const resp = await categories.findById(id).exec();
            res.status(200).json(resp);
        } catch (err) {
            res.status(500).json(err);
          }
    };

    static attCateg = async (req, res) => {
      try {
        assert(['ATIVA', 'INATIVA'].includes(req.body.status), 'Status inválido')
        const filter = { _id: req.params.id };
        const update = { nome: req.body.nome, status: req.body.status };
        const resp = await categories.findOneAndUpdate(filter, update,  {
          new: true
        }).exec();
        res.status(200).json(resp);
      } catch (err) {
        res.status(500).send(err.message);
      } 
    };
  
    static deleteCateg = async (req, res) => {
      try {
        const id = req.params.id;
        const resp = await categories.findByIdAndDelete(id).exec();
        res.status(200).json(resp);
      } catch (err) {
        res.status(500).json(err);
      }
  };

    static async createCategory (req, res) {
        try {
          const categ = new categories({
            nome: req.body.nome,
            status: req.body.status,
          });
          if (!categ.nome || !categ.status) {
            res.status(417).send('Nome ou status incorretos.');
          } else {
            await categ.save();
            res.status(201).json(categ);
          }
        } catch (err) {
          res.status(500).json(err);
        }
      }
}


export default CategoriesController;