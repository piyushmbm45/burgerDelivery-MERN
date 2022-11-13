import express from 'express';
import { APP_PORT, DB_URL } from './config';
import pkg from 'mongoose';
import routes from './routes/index.js';
import errorHandler from './middleware/errorHandle';

const { connect, connection } = pkg;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
  const ids = ['636689f49b1441350eca1d40', '636689f49b1441350eca1d41'];
  res.send('hitted');
});
app.use('/api', routes);

app.use(errorHandler);
app.listen(APP_PORT, () => console.log(`Server is Listening on ${APP_PORT}`));
