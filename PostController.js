import Post from "./Post.js";
import PostService from "./PostService.js"

class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body);
      res.status(200).json(post);
    } catch (e) {
      console.log(e)
      res.status(500).send({error: e});
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      return res.status(200).json(posts);
    } catch (e) {
      res.status(500).send({error: e});
    }
  }

  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);

      return res.status(200).json(post);
    } catch (e) {
      res.status(500).send({error: e});
    }
  }

  async update(req, res) {
    try {
      const postData = req.body;

      const updatePost = await PostService.update(postData);
      return res.status(200).json(updatePost);
    } catch (e) {
      res.status(500).send({error: e.message});
    }
  }


  async delete(req, res) {
    try {
      const {id} = req.params;
      const post = await PostService.delete(id);
      return res.status(200).json(post);
    } catch (e) {
      res.status(500).send({error: e});
    }
  }
}

export default new PostController;