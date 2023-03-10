import { Router } from "express";
import {
  getAllCategoriesController,
  getRealEstatesByCategoryController,
  postCategoryController,
} from "../controllers/category.controller";
import { Category } from "../entities";
import { verifyAdmin } from "../middlewares/verifyAdmin.middleware";
import { verifyData } from "../middlewares/verifyData.middleware";
import { verifyExist } from "../middlewares/verifyExist.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { verifyUniqueKey } from "../middlewares/verifyUniqueKey.middleware";
import { categoryCreateSchema } from "../schemas/category.schema";

const categoryRoutes = Router();

categoryRoutes.post(
  "",
  verifyToken,
  verifyAdmin,
  verifyData(categoryCreateSchema),
  verifyUniqueKey(Category, "name", "Category"),
  postCategoryController
);
categoryRoutes.get("", getAllCategoriesController);
categoryRoutes.get(
  "/:id/realEstate",
  verifyExist(Category, "Category"),
  getRealEstatesByCategoryController
);

export default categoryRoutes;
