import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routerApiV1 from '../router/index.js';

const serve = class Server {
  constructor() {
    dotenv.config();
    this.app = express();
    this.port = process.env.PORT | 3000;
    this.cors = cors;

    // middlewares
    this.middlewares();
    this.routes();
    // ejecutar metodo listen server
    this.listenServer();
  }

  routes() {
    routerApiV1(this.app);
  }

  middlewares() {
    this.app.use(express.static('public'));
    this.app.use(this.cors());
    this.app.use(express.json());
  }

  listenServer() {
    this.app.listen(this.port, () => {
      console.log('Ejecutando en puerto: ' + this.port);
    });
  }
};

export default serve;
