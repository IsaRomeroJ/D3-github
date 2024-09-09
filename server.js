import express from "express";
import cors from "cors";
import postsRouter from "./src/routes/posts.routes.js"

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


app.use('/posts', postsRouter);

app.listen(PORT, () => {
    console.log(`Servidor en el puerto http://localhost:${PORT}`);
});