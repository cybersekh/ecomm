import categories from '../models/categoriesModel.js';

class CategoriesController {
    static getAll = async (_req, res) => {
        const resp = await categories.find();
        res.status(200).json(resp);
    };
}

export default CategoriesController;