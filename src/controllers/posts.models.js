import pool from "../../database/config.js";

// MODELO DE GET
export const getAllPostsModels = async () => {
    const SQLquery = { text: "SELECT * FROM posts" };
    const result = await pool.query(SQLquery);
    return result.rows;
};

// MODELO DE POSTS

export const postAllPostsModels = async (titulo, img, descripcion, likes) => {
    const sql =
        "INSERT INTO posts (titulo, img,descripcion,likes) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [titulo, img, descripcion, likes];
    try {
        const result = await pool.query(sql, values);
        return result.rows[0]; 
    } catch (error) {
        console.error("Error al crear el post:", error);
        throw error;
       
    }
};