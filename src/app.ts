import express from 'express';
import path from 'path';
import usersRouter from './routers/usersRouter';

const app = express();
const PORT = process.env.PORT || 8080;

app.use('/images', express.static(path.join(__dirname, String(process.env.SAVE_DIR))));

// routers
app.use('/users', usersRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'NotFound' });
});

// eslint-disable-next-line no-unused-vars
app.use((err: any, req: any, res: any, _next: any) => {
  res.status(err.status || 500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
