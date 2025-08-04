import express from 'express';
import userRoutes from './routes/userRoutes.js';
import networkRoutes from "./routes/networkRoutes.js";
import storeRoutes from "./routes/storeRoutes.js";
import screenRoutes from "./routes/screenRoutes.js";
import advertiserRoutes from "./routes/advertiserRoutes.js";
import { logger } from './middlewares/logger.js';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(cors());

app.use(express.json());
app.use(logger);
app.use('/uploads', express.static(path.resolve('uploads')));

app.use('/api/users', userRoutes);
app.use("/api/networks", networkRoutes);
app.use("/api/stores", storeRoutes);
app.use("/api/screens", screenRoutes);
app.use("/api/advertisers", advertiserRoutes);

app.use(express.urlencoded({ extended: true }));
export default app;
