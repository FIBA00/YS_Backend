import examplesRouter from '../api/controllers/examples/router.js';

export default function RegisterRoutes(app) {
  app.use('/api/v1/examples', examplesRouter);
}
