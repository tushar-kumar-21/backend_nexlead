import mongoose from "mongoose";

const advertiserSchema = new mongoose.Schema({
    advertiser_email: {
        type: String,
        required: true,
    },
    advertiser_phone_no: {
        type: String,
        required: true,
    },
    advertiser_name: {
        type: String,
        required: true,
    },
    advertiser_business_name: {
        type: String,
        required: true,
    },
    advertiser_business_sub_name: {
        type: String,
        required: true,
    },
    advertiser_address: {
        type: String,
        required: true,
    },
    advertiser_city: {
        type: String,
        required: true,
    },
    advertiser_province: {
        type: String,
        required: true,
    },
    advertiser_postal_code: {
        type: String,
        required: true,
    },
    advertiser_business_description: {
        type: String,
        required: false,
    },
    advertiser_services: {
        type: [String],
        required: false,
    },
    advertiser_logo: {
        type: String,
        required: false
    },
    advertiser_layout_img: {
        type: String,
        required: false,
    },
    advertiser_business_front_img: {
        type: String,
        required: false,
    },
    advertiser_business_back_img: {
        type: String,
        required: false,
    },
    advertiser_flip_image: {
        type: String,
        required: false,
    },
    advertiser_background_image: {
        type: String,
        required: false,
    },
    advertiser_exclusive_image: {
        type: String,
        required: false
    }
})

export const Advertiser = mongoose.model("Advertisers", advertiserSchema)