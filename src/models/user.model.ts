import { pool } from '../config/database';
import { User as IUser } from '../interfaces/user.interface'

const getByEmail = async(email:string) => {
    const query = {
        text: `
        SELECT * FROM USERS
        WHERE email = $1
        `,
        values: [email]
    }
    const { rows } = await pool.query(query);
    console.log('user by email', rows[0])
    return rows[0] as IUser;
}

const create = async(email: string, password: string) => {
    const query = {
        text: `
        INSERT INTO USERS (email, password)
        VALUES($1, $2)
        RETURNING *
        `,
        values: [email, password]
    }
    const { rows } = await pool.query(query);
    console.log('create user', rows[0])
    return rows[0];
}
const findAll = async() => {
    const query = {
        text: "SELECT * FROM USERS"
    }
    const { rows } = await pool.query(query);
    return rows as IUser[];
}

export const UserModel = {
    create,
    getByEmail,
    findAll,
}