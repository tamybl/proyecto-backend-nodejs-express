import pg from 'pg';

const { Pool } = pg;

const connectionString = 'postgresql://postgres:admin@localhost:5432/db_trekly';

export const pool = new Pool({
    connectionString,
    allowExitOnIdle: true
});