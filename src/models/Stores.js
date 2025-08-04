import mongoose from "mongoose";

const storesSchema = new mongoose.Schema({
    store_name: {
        type: String,
        required: true,
    },
    store_network: {
        type: String,
        required: true,
    },
    network_id:{
        type:String,
        required:true,
    },
    store_region: {
        type: String,
        required: true,
    },
    store_address: {
        type: String,
    },
    store_city: {
        type: String,
        required: true,
    },
    store_province: {
        type: String,
        required: true,
    },
    store_postal_code: {
        type: String
    },
    store_owner_name: {
        type: String,
        required: true,
    },
    store_owner_email: {
        type: String,
        required: true
    },
    store_owner_phone_no: {
        type: Number,
        required: true
    },
    store_manager_name: {
        type: String,
        required: true,
    },
    store_manager_email: {
        type: String,
        required: true
    },
    store_manager_phone_no: {
        type: Number,
        required: true
    },
    store_type:{
        type:String,
        required:true,
    },
    store_logo: {
        type: String,
        required: false
    },
    store_exterior_photo:{
        type:String,
        required:false,
    },
    store_note:{
        type:String,
        required:false,
    },
    store_screens: [
        {
            fileame: String,
            path: String,
            mimetype: String,
            size: Number,
        }
    ],

})

export const Stores = mongoose.model("Stores", storesSchema);