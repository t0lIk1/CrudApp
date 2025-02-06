import mongoose from "mongoose";

const Post = new mongoose.Schema({
  username: {type: "string", required: true},
  title: {type: "string", required: true},
  content: {type: "string", required: true},
  img: {type: "string"},
});


export default mongoose.model('Post', Post);