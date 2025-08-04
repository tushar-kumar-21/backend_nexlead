import express from 'express';
import { createAdvertisers } from '../controllers/advertiserController.js';
import { advertiserUpload } from '../configs/advertiserUpload.js';

const router = express.Router();

router.post("/createAdvertiser",
    advertiserUpload.fields([
        { name: "advertiser_logo", maxCount: 1 },
        { name: "advertiser_layout_img", maxCount: 1 },
        { name: "advertiser_business_front_img", maxCount: 1 },
        { name: "advertiser_business_back_img", maxCount: 1 },
        { name: "advertiser_flip_image", maxCount: 1 },
        { name: "advertiser_background_image", maxCount: 1 },
        { name: "advertiser_exclusive_image", maxCount: 1 },
    ]),
    createAdvertisers
);



export default router;