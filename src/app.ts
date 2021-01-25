  
require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

import express from 'express';
import { router } from './routes';

const app = express();
app.use(express.json());
app.use(router);

export { app }