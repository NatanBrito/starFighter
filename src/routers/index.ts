import { Router } from "express";
import "express-async-errors";

import BattleRoutes from "./BattleRoutes.js";
import errorHandlerMiddleware from "../utils/HanddleMiddleware.js";
import RankingRoutes from "./rankingRoute.js";

const router = Router();

router.use(BattleRoutes);
router.use(RankingRoutes);
router.use(errorHandlerMiddleware);

export default router;
