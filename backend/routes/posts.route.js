import { Router } from "express";
import {
  getAllPostsController,
  createPostController,
  likePostController,
  deletePostController,
} from "../controllers/posts.controller.js";
// import {
//   findAll,
//   create,
//   updatePost,
//   deletePost,
// } from "../models/posts.models.js";

const router = Router();

router.get("/posts", getAllPostsController);
router.post("/posts", createPostController);
router.put("/posts/like/:id", likePostController);
router.delete("/posts/:id", deletePostController);

// router.post("/posts", async (req, res) => {
//   const post = req.body;
//   console.log(post.titulo);
//   const newPost = {
//     titulo: post.titulo,
//     img: post.url,
//     descripcion: post.descripcion,
//     likes: 0,
//   };
//   const createdPost = await create(newPost);
//   res.json(createdPost);
// });

// router.put("/posts/like/:id", async (req, res) => {
//   const { id } = req.params;
//   const post = await updatePost(id);
//   res.send(post);
// });

// router.delete("/posts/:id", async (req, res) => {
//   const id = req.params.id;
//   const post = await deletePost(id);
//   res.json(post);
// });

export default router; // Exporta el router como valor por defecto
