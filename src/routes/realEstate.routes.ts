import { Router } from "express";
import {
  getAllRealEstatesController,
  postRealEstateController,
} from "../controllers/realEstate.controller";

const realEstateRoutes = Router();

realEstateRoutes.post("", postRealEstateController);
realEstateRoutes.get("", getAllRealEstatesController);

export default realEstateRoutes;
