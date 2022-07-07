import { Router } from "express";
import { BattleUsers } from "../controllers/BattleController.js";
import schemaValidateMiddleware from "../middlewares/schemaValidateMiddleware.js";
import schemaBattle from "../schemas/SchemaBattleUsers.js";
const BattleRoutes = Router();

BattleRoutes.post(
  "/battle",
  schemaValidateMiddleware(schemaBattle),
  BattleUsers
);

export default BattleRoutes;
