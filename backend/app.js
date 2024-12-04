import express from "express";
import cors from "cors";
import postsRouter from "./routes/posts.route.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(postsRouter); //Las rutas las pase aqui

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}.`);
});
