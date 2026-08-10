import './common/env.js';
import Server from './common/server.js';
import RegisterRoutes from './routes/main.js';

export default new Server().router(RegisterRoutes).listen(process.env.PORT);
