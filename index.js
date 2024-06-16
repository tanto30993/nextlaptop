import express from "express";
import connectToDb from "./database/index.js";
import router from "./routes/index.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors({
  origin: "*"
}));
app.use('/api', router);

connectToDb();

app.listen(process.env.PORT, () => {
  console.log(`App is listening on post: ${process.env.PORT}`);
});
