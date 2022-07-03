import express from "express";
import cors from "cors";
import dotenv from 'dotenv';

const serve = class Server {
  constructor() {
    dotenv.config();
    this.app = express();
    this.port = process.env.PORT | 3000;
    this.cors = cors;


    // middlewares
    this.middlewares();
    // ejecutar metodo listen server
    this.listenServer();
  }

  routes() { }

  middlewares() {
    this.app.use(express.static("public"));
    this.app.use(this.cors());
  }

  listenServer() {
    this.app.listen(this.port, () => {
      console.log("Ejecutando en puerto: " + this.port);
    });
  }
};

export default serve;
