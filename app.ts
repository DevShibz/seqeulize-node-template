import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { sequelize } from './src/config/database';
import router from './src/routes';
const app = express();

dotenv.config()

console.log(process.env.DB_PASSWORD)
// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);



// Database connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connected');
  })
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });
