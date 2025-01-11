import express from 'express';
import adminRoutes from './routes/adminRoutes';
import userRoutes from './routes/userRoutes';

const app = express();
app.use(express.json());

app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
