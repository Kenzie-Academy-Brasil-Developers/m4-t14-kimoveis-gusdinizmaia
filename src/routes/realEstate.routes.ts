import { Router } from "express";

const realEstateRoutes = Router();

realEstateRoutes.post("");
realEstateRoutes.get("");
realEstateRoutes.patch(":id");
realEstateRoutes.delete(":id");

export default realEstateRoutes;
