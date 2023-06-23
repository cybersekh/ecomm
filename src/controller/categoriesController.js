import categories from '../models/categoriesModel.js';

class CategoriesController {
    static getAll = async (_req, res) => {
        const resp = await categories.find();
        res.status(200).json(resp);
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
            res.status(201).send('Nova categoria cadastrada.');
          }
        } catch (err) {
          res.status(500).json(err);
        }
      }
}


export default CategoriesController;