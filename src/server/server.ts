import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import imageRouter from './routes/imageApi';

const app = express();

//Port constant
const PORT = 3000;

//Adding necessary parsing functions
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Having all routes be checked
app.use('/img', imageRouter)

// Catch for invalid request
// app.use('/*', (req: Request, res: Response) => {
//   return res.sendStatus(404);
// });

// Global error catching
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  const defaultErr = {
    log: `GLOBAL ERROR HANDLER: caught unknown middleware error${err.toString()}`,
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  if (errorObj.log) console.log(errorObj);
  return res.status(errorObj.status).json(errorObj.message);
});

//Spin up backend on port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

export default app;
  