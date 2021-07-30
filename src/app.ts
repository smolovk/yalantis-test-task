import * as dotenv from 'dotenv';
import express from 'express';
import appRouter from './routers/appRouter';
import usersRouter from './routers/usersRouter';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// routers
app.use('/', appRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
