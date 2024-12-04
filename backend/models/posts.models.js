import e from "express";
import pool from "../database/connection.js";

export const findAllModel = async () => {
  const { rows, rowCount } = await pool.query("SELECT * FROM posts");
  return rows;
};

export const createModel = async (post) => {
  const query =
    "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *";
  const { rows, rowCount } = await pool.query(query, [
    post.titulo,
    post.img,
    post.descripcion,
    post.likes,
  ]);

  if (rowCount === 1) {
    return { status: true, msg: "Post creado exitosamente", data: rows[0] };
  }
  return { status: false, msg: "No se pudo crear el post" };
};

export const updatePostModel = async (id) => {
  const query = "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *";
  const values = [id];
  const { rows, rowCount } = await pool.query(query, values);
  if (rowCount === 1) {
    return { status: true, msg: "Post actualizado", data: rows[0] };
  }
  return { status: false };
};

export const deletePostModel = async (id) => {
  const query = "DELETE FROM posts WHERE id = $1 RETURNING *";
  const { rows, rowCount } = await pool.query(query, [id]);
  if (rowCount === 1) {
    return { status: true, msg: "Post eliminado", data: rows[0] };
  }
  return { status: false };
};
