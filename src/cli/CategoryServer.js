import chalk from "chalk";

export default class CategoryService {
  static async findCategories() {
    try {
      const res = await fetch("http://localhost:3000/categories");
      if (res.ok) {
        const categList = await res.json();
        console.log("Status:", chalk.green(res.status));
        return categList;
      }
    } catch (erro) {
      return chalk.red("Aconteceu um erro.");
    }
  }

  static async findCategoryById(id) {
    try {
      const res = await fetch(`http://localhost:3000/categories/${id}`);
      if (res.ok) {
        const categoryId = await res.json();
        console.log("status:", chalk.green(res.status));
        return categoryId;
      }
    } catch (error) {
      return chalk.red("Aconteceu um erro.");
    }
  }
}
