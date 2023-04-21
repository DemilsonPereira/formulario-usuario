import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import morgan from 'morgan'
dotenv.config();

import { router } from "./routes.js";

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.router();
        this.port = process.env.PORT || 8800;
        this.uri = "http://localhost"
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(morgan('dev'));
    }

    router() {
        this.app.use(router);
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Server is listening ${this.uri}:${this.port}`);
        });
    }
}

export {
    App
}
