import express from 'express';
import cors from 'cors';
import forumRouter from './forum/router';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

// INIT
dotenv.config({ path: './.env' });
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTES
app.use('/forum', forumRouter);

// LISTENERS
app.listen(process.env.SERVER_PORT, () =>
  console.log(`server running on localhost: ${process.env.SERVER_PORT}`)
);
