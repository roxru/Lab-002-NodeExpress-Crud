
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import models from './src/models';
import routes from './src/routes';

const app = express();
app.use(cors());

app.use('/users', routes.user);
app.use('/messages', routes.message);
app.use('/quotes', routes.quotes)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    req.context = {
        models
    };
    next();
});

app.listen(3000, () => {
    console.log(process.env.ENVIRONMENT);
    console.log('Example app listening on port 3000!');
});