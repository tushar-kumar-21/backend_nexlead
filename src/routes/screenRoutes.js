import express from "express";
import { createScreens } from "../controllers/screenControllers.js";
import { screenUpload } from "../configs/screenUpload.js";

const router = express.Router();

router.post("/createScreen",
    screenUpload.fields([
        { name: 'screen_documents', maxCount: 10 },
        { name: 'screen_screens', maxCount: 10 },
    ]),
    createScreens
);

export default router;