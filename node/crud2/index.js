import express, { json } from 'express';
const app = express();
import planetsRouter from './routes/planets';

app.use(json());
app.use('/api/planets', planetsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
