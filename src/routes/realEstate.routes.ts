import { Router } from "express";
import {
  getAllRealEstatesController,
  postRealEstateController,
} from "../controllers/realEstate.controller";
import { RealEstate } from "../entities";
import { verifyAdmin } from "../middlewares/verifyAdmin.middleware";
import { verifyData } from "../middlewares/verifyData.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { verifyUniqueKey } from "../middlewares/verifyUniqueKey.middleware";
import { realEstateCreateSchema } from "../schemas/realEstate.schema";

const realEstateRoutes = Router();

realEstateRoutes.post(
  "",
  verifyToken,
  verifyAdmin,
  verifyData(realEstateCreateSchema),
  postRealEstateController
);
realEstateRoutes.get("", getAllRealEstatesController);

export default realEstateRoutes;
