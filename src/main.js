import express from 'express';
import routes from './routes/index.js';
import db from './config/db.js';

db.on('error', console.log.bind(console, 'Aconteceu um erro ao tentar conectar.'));
db.once('open', () => {
    console.log('A conexão foi feita.');
});

const app = express();
app.use(express.json());
routes(app);

export default app;