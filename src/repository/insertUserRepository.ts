import db from "../db/index.js";

async function verifyInsertUser(people: string) {
  const verifyUser = await db.query(
    `
            SELECT * FROM  fighters
            WHERE username= $1
    `,
    [people]
  );
  if (verifyUser.rowCount < 1) {
    await db.query(
      `
        INSERT INTO fighters (username,wins,losses,draws)
        VALUES ($1,0,0,0);
        `,
      [people]
    );
  }
  return people;
}
const verifyInsertRepository = {
  verifyInsertUser,
};
export default verifyInsertRepository;
