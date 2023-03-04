import { Router } from "express";
import {
  getRealEstatesByCategoryController,
  postCategoryController,
} from "../controllers/category.controller";

const categoryRoutes = Router();

categoryRoutes.post("", postCategoryController);
categoryRoutes.get("/:id/realEstate", getRealEstatesByCategoryController);

export default categoryRoutes;
