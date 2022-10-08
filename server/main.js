import express, { json } from 'express';
import { APP_PORT, DB_URL } from './config/index.js';
import routes from './routes/index.js';
import errorHandler from './middleware/errorHandle.js';
import pkg from 'mongoose';

const { connect, connection } = pkg;
const app = express();
app.use(json());
app.use('/api', routes);

connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('DB connected');
});

app.get('/home', (req, res) => {
  res.send('hitted');
});

app.use(errorHandler);
app.listen(APP_PORT, () => console.log(`Server is Listening on ${APP_PORT}`));
