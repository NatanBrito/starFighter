import { Request, Response } from "express";
import verifyInsertRepository from "../repository/insertUserRepository.js";
import * as serviceBattle from "../services/BattleService.js";

export const BattleUsers = async (req: Request, res: Response) => {
  const { firstUser, secondUser }: { firstUser: string; secondUser: string } =
    req.body;
  const user1 = firstUser.toLowerCase();
  const user2 = secondUser.toLowerCase();
  if (user1 === user2) {
    return res.status(409).send("same user");
  }
  const people1 = await serviceBattle.peopleStar(user1);
  const people2 = await serviceBattle.peopleStar(user2);
  await verifyInsertRepository.verifyInsertUser(user1);
  await verifyInsertRepository.verifyInsertUser(user2);
  const match = serviceBattle.MatchBattle(
    people1,
    firstUser,
    people2,
    secondUser
  );
  res.status(200).send(match);
};
