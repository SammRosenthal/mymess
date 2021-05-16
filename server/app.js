import express from "express";
import cors from "cors";
import forumRouter from "./forum/router";
import dotenv from "dotenv";

// INIT
dotenv.config({ path: "./.env" });
const app = express();

// MIDDLEWARE
app.use(cors());

// ROUTES
app.use("/forum", forumRouter);

// LISTENERS
app.listen(8080, () => console.log(`server running on localhost: ${8080}`));
