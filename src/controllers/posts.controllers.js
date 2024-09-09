import {
    getAllPostsModels,
    postAllPostsModels,
} from "../models/posts.models.js";

export const getAllPost = async (req, res) => {
    try {
        const posts = await getAllPostsModels();
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const postAllPost = async (req, res) => {
    const { titulo, img, descripcion, likes } = req.body;
    try {
        const nuevoPost = await postAllPostsModels(titulo, img, descripcion, likes);
        res.status(200).json({ post: nuevoPost });
    } catch (error) {
        console.error('Error al crear el post:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
