import Post from "./Post.js";

class PostService {
  async create(post) {
    const createdPost = await Post.create(post);
    return createdPost;
  }

  async getAll() {
    const posts = await Post.find()
    return posts
  }

  async getOne(id) {
    if (!id) {
      throw new Error("id is required");
    }
    const post = await Post.findById(id);
    return post;
  }


  async update(postData) {
    if (!postData._id) {
      throw new Error("post is not found");
    }
    const updatePost = await Post.findByIdAndUpdate(postData._id, postData, {new: true});
    return updatePost
  }


  async delete(id) {
    if (!id) {
      throw new Error("id is required");
    }
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      throw new Error("Post not found");
    }
    return deletedPost;
  }
}

export default new PostService;