import { Router } from "express";
import {
  getAllRealEstatesController,
  postRealEstateController,
} from "../controllers/realEstate.controller";
import { verifyAdmin } from "../middlewares/verifyAdmin.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";

const realEstateRoutes = Router();

realEstateRoutes.post("", verifyToken, verifyAdmin, postRealEstateController);
realEstateRoutes.get("", getAllRealEstatesController);

export default realEstateRoutes;
