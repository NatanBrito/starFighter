import { Router } from "express";
import { Ranking } from "../controllers/rankingController.js";
const RankingRoutes = Router();

RankingRoutes.get("/ranking", Ranking);

export default RankingRoutes;
