import categories from '../models/categoriesModel.js';

class CategoriesController {
    static getAll = async (_req, res) => {
        const resp = await categories.find();
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