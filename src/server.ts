
import express from 'express';
import { teamRoutes } from './routes/teams';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger/swagger.json';

const app = express();
app.use(express.json());

app.use('/teams', teamRoutes);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3333, () => {
    console.log('Servidor rodando em http://localhost:3333');
});
