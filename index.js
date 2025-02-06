import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import Post from './Post.js';
import router from "./router.js";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use(express.json());
app.use("/api", router); // you can specify multiple routes
// app.use("/api/users", userRoute)

async function startApp() {
  try {
    await mongoose.connect(process.env.DB_URL);
    app.listen(port, () => {
      console.log(`Server started on port ${port}`)
    })
  } catch (e) {
    console.log(e);
  }
}

startApp();