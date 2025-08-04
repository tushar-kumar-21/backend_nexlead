import { createUploader } from "../../utils/upload.js";

export const advertiserUpload = createUploader({
    advertiser_logo: {
        folder: "uploads/advertiser_logos",
        allowedTypes: /jpeg|jpg|png|webp/,
        errorMessage: "Only images allowed for logo",
    },
    advertiser_layout_img: {
        folder: "uploads/advertiser_layout_imgs",
        allowedTypes: /jpeg|jpg|png|webp/,
        errorMessage: "Only images allowed for layout images",
    },
    advertiser_business_front_img: {
        folder: "uploads/advertiser_business_front_imgs",
        allowedTypes: /jpeg|jpg|png|webp/,
        errorMessage: "Only images allowed for front images",
    },
    advertiser_business_back_img: {
        folder: "uploads/advertiser_business_back_imgs",
        allowedTypes: /jpeg|jpg|png|webp/,
        errorMessage: "Only images allowed for back images",
    },
    advertiser_flip_image: {
        folder: "uploads/advertiser_flip_images",
        allowedTypes: /jpeg|jpg|png|webp/,
        errorMessage: "Only images allowed for flip images",
    },
    advertiser_background_image: {
        folder: "uploads/advertiser_background_images",
        allowedTypes: /jpeg|jpg|png|webp/,
        errorMessage: "Only images allowed for background images",
    },
    advertiser_exclusive_image: {
        folder: "uploads/advertiser_exclusive_images",
        allowedTypes: /jpeg|jpg|png|webp/,
        errorMessage: "Only images allowed for exclusive images",
    },
});
