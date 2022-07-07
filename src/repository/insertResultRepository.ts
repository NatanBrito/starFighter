import db from "../db/index.js";

export async function updateWinner(people1: string, people2: string) {
  await db.query(
    `
UPDATE fighters SET wins= wins+1
WHERE username=$1;
`,
    [people1]
  );
  await db.query(
    `
    UPDATE fighters SET losses= losses+1
    WHERE username=$1;
    `,
    [people2]
  );
}
export async function updateLosses(people: string) {
  await db.query(
    `
    UPDATE fighters SET losses= losses+1
    WHERE username=$1;
    `,
    [people]
  );
}
export async function updateDraws(people1: string, people2: string) {
  await db.query(
    `
    UPDATE fighters SET draws= draws+1
    WHERE username=$1 ;
    `,
    [people1]
  );
  await db.query(
    `
    UPDATE fighters SET draws= draws+1
    WHERE username=$1 ;
    `,
    [people2]
  );
}

const insertResultRepository = {
  updateWinner,
  updateLosses,
  updateDraws,
};
export default insertResultRepository;
