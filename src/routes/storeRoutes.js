import express from 'express';
import { createStores } from '../controllers/storeController.js';
import { storeUpload } from '../configs/storeUpload.js';

const router = express.Router();

router.post("/createStore",
    storeUpload.fields([
        { name: 'store_logo', maxCount: 1 },
        { name: "store_exterior_photo", maxCount: 1 },
        { name: "store_screens", maxCount: 10 },
    ]),
    createStores
)

export default router;