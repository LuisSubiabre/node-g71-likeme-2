import {
  findAllModel,
  createModel,
  updatePostModel,
  deletePostModel,
} from "../models/posts.models.js";

// Controlador para obtener todos los posts
// findAllModel <- models/posts.models.js
export const getAllPostsController = async (req, res) => {
  try {
    const result = await findAllModel();
    return res.json(result);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controlador para crear un nuevo post
// createModel <- models/posts.models.js
export const createPostController = async (req, res) => {
  try {
    const post = req.body;

    const newPost = {
      titulo: post.titulo,
      img: post.img,
      descripcion: post.descripcion,
      likes: 0,
    };
    const result = await createModel(newPost);

    return res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error2" });
  }
};

export const likePostController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await updatePostModel(id);
    if (!result.status) {
      return res
        .status(404)
        .json({ message: `No se encontro post con ID: ${id}` });
    }
    res.json({ message: result.msg, data: result.data });
  } catch (error) {
    res.status(500).json({ error: "Internal server error2" });
  }
};

export const deletePostController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deletePostModel(id);
    if (!result.status) {
      return res
        .status(404)
        .json({ message: `No se encontro post con ID: ${id}` });
    }
    res.json({ message: result.msg, data: result.data });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
