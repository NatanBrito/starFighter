import { Request, Response } from "express";
import RankingRepository from "../repository/rankingRepository.js";

export const Ranking = async (req: Request, res: Response) => {
  const result = await RankingRepository.Ranking();
  res.status(200).send({ fighters: result });
};
