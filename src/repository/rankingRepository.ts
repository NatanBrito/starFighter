import db from "../db/index.js";

export async function Ranking() {
  const { rows } = await db.query(`
    SELECT * FROM  fighters order by wins desc, draws desc
    `);
  return rows;
}

const RankingRepository = {
  Ranking,
};
export default RankingRepository;
