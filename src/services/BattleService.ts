import axios from "axios";

import insertResultRepository from "../repository/insertResultRepository.js";
export async function peopleStar(people: string) {
  const people1 = await axios.get(
    `https://api.github.com/users/${people}/repos`
  );
  if (people1.data[0].message) {
    console.log(people1.data.message);
    throw Error;
  }
  const stars = people1.data.map((obj: any) => {
    return obj.stargazers_count;
  });

  const startOfPeople = stars.reduce((contador: number, curr: any) => {
    return contador + curr;
  });
  return startOfPeople;
}
export function MatchBattle(
  people1: number,
  firstUser: string,
  people2: number,
  secondUser: string
) {
  if (people1 > people2) {
    insertResultRepository.updateWinner(firstUser, secondUser);
    return {
      winner: firstUser,
      loser: secondUser,
      draw: false,
    };
  }
  if (people1 < people2) {
    insertResultRepository.updateWinner(secondUser, firstUser);
    return {
      winner: people2,
      loser: people1,
      draw: false,
    };
  }
  if (people1 === people2) {
    insertResultRepository.updateDraws(firstUser, secondUser);
    return {
      winner: null,
      loser: null,
      draw: true,
    };
  }
}
