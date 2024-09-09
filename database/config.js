import pg from "pg";

const pool = new pg.Pool({
    host: "localhost",
    user: "postgres",
    password: "b00tcamp",
    database: "likeme",
    allowExitOnIdle: true,
});

pool.query("SELECT NOW()", (err, res) => {
    if (err) {
        console.log("Error conexion DB : ", err);
    } else {
        console.log("DB conectada desde el archivo config.js", res.rows[0].now);
    }
});

export default pool;