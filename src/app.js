import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import routes from './routes/index.routes.js';
import sequelize from './config/config.js';
import errorHandler from './middlewares/errorHandler.js';
import errorLogger from './middlewares/errorLogger.js';

const app = express();

// Middlewares
app.use(helmet()); // Ad  some HTTP headers
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());// inform we respond with json files

app.get('/', (req, res) => {
  res.send('Hello Humans');
});

// Routes
app.use('/api', routes);

// TODO: Add errors handler
app.use(
  errorLogger,
  errorHandler
);

try {
  sequelize.authenticate();
  sequelize.sync();
  console.log('Connected to DB');
} catch (error) {
  console.log('Unable to connect to DB: ', error);
}

const PORT = 4000;
app.listen(PORT, () => {
  console.log('Listen on Port ' + PORT);
});
