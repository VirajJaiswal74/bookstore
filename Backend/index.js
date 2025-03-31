import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors"

import bookRoute from "./routes/book.route.js"
import userRoute from "./routes/user.route.js"

import path from "path";

const app = express();

app.use(cors())
app.use(express.json())

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODB_URI;

const __dirname = path.resolve(); 

// connect to mongoDB
try{
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Connnect to mongoDb")
}catch(error){
  console.log("Error: ", error)
}

// defining routes
app.use("/book", bookRoute)
app.use("/user", userRoute)

app.use(express.static(path.join(__dirname, "/Frontend/dist")))
app.get('*', (_, res)=>{
  res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"))
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});