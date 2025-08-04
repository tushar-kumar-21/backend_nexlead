import mongoose, { mongo } from "mongoose";

const networkSchema = new mongoose.Schema({
    network_name: {
        type: String,
        required: true,
    },
    network_address: {
        type: String,
        required: true,
    },
    network_city: {
        type: String,
        required: true,
    },
    network_province: {
        type: String,
        required: true,
    },
    network_postal_code: {
        type: String,
        required:true,
    },
    network_date_signature: {
        type: Date,
        required: true,
    },
    network_contact_first_name: {
        type: String,
        required: true,
    },
    network_contact_last_name: {
        type: String,
        required: true
    },
    network_email: {
        type: String,
        required: true,
    },
    network_contact_phone_no: {
        type: Number,
        required: true
    },
    network_contact_telephone_no: {
        type: Number,
        required: true
    },
    network_logo: {
        type: String,
        required: false
    },
    network_contract_files: [
        {
            fileame: String,
            path: String,
            mimetype: String,
            size: Number,
        }
    ],

})

export const Networks = mongoose.model("Networks", networkSchema);