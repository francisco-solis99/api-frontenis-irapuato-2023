import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import routes from './routes/index.routes.js';
import errorHandler from './middlewares/errorHandler.js';
import errorLogger from './middlewares/errorLogger.js';

// Create the app with express
const app = express();

// Middlewares
app.use(helmet()); // Add  some HTTP headers
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());// inform we respond with json files

// See the all available endpoints
app.get('/', (req, res) => {
  res.json([
    {
      endpoint: '/api/players',
      description: 'Returns all the players from the tourment',
      parameters: [
        {
          name: 'id',
          endpoint: '/api/:playerId',
          description: 'Returns a specific player from the tourment by his id'
        }
      ]
    },
    {

      endpoint: '/api/groups',
      description: 'Returns all the groups from the tourment',
      parameters: [
        {
          name: 'id',
          endpoint: '/api/:groupId',
          description: 'Returns a specific group from the tourment by his id'
        }
      ]
    },
    {
      endpoint: '/api/teams',
      description: 'Returns all the teams from the tourment',
      parameters: [
        {
          name: 'id',
          endpoint: '/api/:teamId',
          description: 'Returns a specific team from the tourment by his id'
        }
      ]
    }
  ]);
});

// Routes
app.use('/api', routes);

// TODO: Add static server
app.use(
  errorLogger,
  errorHandler
);

const PORT = 4000;
app.listen(PORT, () => {
  console.log('Listen on Port ' + PORT);
});
