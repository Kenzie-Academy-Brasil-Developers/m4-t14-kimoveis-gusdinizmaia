import { Router } from "express";
import {
  getRealEstatesByCategorieController,
  postCategorieController,
} from "../controllers/categorie.controller";

const categorieRoutes = Router();

categorieRoutes.post("", postCategorieController);
categorieRoutes.get("/:id/realEstate", getRealEstatesByCategorieController);

export default categorieRoutes;
