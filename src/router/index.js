import categoriesRouter from "./categories.router.js";
import productsRouter from "./products.router.js";
import usersRouter from "./users.router.js";

const routerApi = (app) => {
  app.use("/users", usersRouter);
  app.use("/products", productsRouter);
  app.use("/categories", categoriesRouter);
};

export default routerApi;
