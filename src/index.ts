import express, { Express, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import helmet from 'helmet'
import { name, version, description, author } from '../package.json'
import { pingRouter } from './routes/ping';
import { userRouter } from './routes/users';
import bodyParser from 'body-parser';

const port = process.env.PORT || 3000;
// Create a new express app instance
const app: Express = express();

app.use(bodyParser.json())
app.use(helmet())

const swaggerSpec = swaggerJSDoc({
  definition: {
    components: {},
    openapi: '3.0.0',
    info: {
      version: version,
      title: name,
      description: description,
      contact: {
        name: author.name,
        email: author.email,
      },
    }
  },
  apis: ['./build/**/*.js']
});
console.log(JSON.stringify(swaggerSpec))
app.use(pingRouter)
app.use('/user', userRouter)
app.use('/api-docs/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`App is listening on port ${port}!`);
});
