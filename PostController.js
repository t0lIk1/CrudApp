import Post from "./Post.js";

class PostController {
  async create(req, res) {
    try {
      const {username, title, content, img} = req.body;
      const post = await Post.create({username, title, content, img});
      res.status(200).json(post);
    } catch (e) {
      console.log(e)
      res.status(500).send({error: e});
    }
  }

  async getAll(req, res) {
    try {
      const posts = await Post.find()
      return res.status(200).json(posts);
    } catch (e) {
      res.status(500).send({error: e});
    }
  }

  async getOne(req, res) {
    try {
      const post = await Post.findById(req.params.id)
      if(!req.params.id){
        return res.status(404).send({error: "Not Found Id"});
      }
      return res.status(200).json(post);
    } catch (e) {
      res.status(500).send({error: e});
    }
  }

  async update(req, res) {
    try {
      const postData = req.body;
      if (!postData._id) {
        return res.status(404).send({ error: "Post not found" });
      }
      const updatePost = await Post.findByIdAndUpdate(postData._id, postData, { new: true });
      return res.status(200).json(updatePost);
    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  }


  async delete(req, res) {
    try {
    const {id} = req.params;
    if (!id){
      return res.status(400).send({ error: "Post not found" });
    }
    const post = await Post.findByIdAndDelete(id);
    return res.status(200).json(post);
    } catch (e) {
      res.status(500).send({error: e});
    }
  }
}

export default new PostController;