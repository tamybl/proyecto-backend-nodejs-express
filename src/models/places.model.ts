
import { pool } from '../config/database';
import { Place as IPlace } from '../interfaces/place.interface'

const getById = async(id:number) => {
    const query = {
        text: `
        SELECT * FROM PLACES
        WHERE id = $1
        `,
        values: [id]
    }
    const { rows } = await pool.query(query);
    if (!rows[0]) {
      throw new Error("Place doesn't exist");
    }
    return rows[0] as IPlace;
}

const readAll = async() => {
    const query = {
        text: "SELECT * FROM PLACES"
    }
    const { rows } = await pool.query(query);
    return rows as IPlace[];
}

export const placesModel = {
  getById,
  readAll,
};
