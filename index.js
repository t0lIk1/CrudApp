import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import router from "./router.js";
import fileUpload from 'express-fileupload';

const app = express();
const port = process.env.PORT || 3000;

app.use(fileUpload({}));
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