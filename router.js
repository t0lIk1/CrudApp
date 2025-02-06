import {Router} from "express";
import Post from "./Post.js";

const router = new Router();

router.post("/posts", async (req, res) => {
  try {
    const {username, title, content, img} = req.body;
    const post = await Post.create({username, title, content, img});
    res.status(200).json(post);
  } catch (e) {
    console.log(e)
    res.status(500).send({error: e});
  }
})
router.get("/posts",)
router.get("/posts/:id",)
router.put("/posts",)
router.delete("/posts/:id",)


export default router;