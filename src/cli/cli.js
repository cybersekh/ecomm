import CategoryService from "./CategoryService.js";

const path = process.argv;

async function processarComando(arg) {
  const pathComando = arg[2];
  switch (pathComando) {
    case "--listarCategorias":
      const result = await CategoryService.findCategories();
      console.log(result);
      break;
    case "--recuperarCategoriaPorId":
      const resultId = await CategoryService.findCategoryById(4);
      console.log(resultId);
      break;
  }
}

processarComando(path);
