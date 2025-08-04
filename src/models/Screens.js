import mongoose from "mongoose";

const screensSchema = new mongoose.Schema({
    network_id: {
        type: String,
        required: true,
    },
    store_id: {
        type: String,
        required: true,
    },
    broadcast_link: {
        type: String,
        required: false
    },
    installation_date: {
        type: String,
        required: true,
    },
    warranty_date: {
        type: String,
        required: false
    },
    screen_note: {
        type: String,
        required: false,
    },
    screen_maintenance: {
        type: String,
        required: false,
    },
    serial_number: {
        type: String,
        required: true,
    },
    screen_documents: [
        {
            fileame: String,
            path: String,
            mimetype: String,
            size: Number,
        }
    ],
    screen_screens: [
        {
            fileame: String,
            path: String,
            mimetype: String,
            size: Number,
        }
    ],

})

export const Screens = mongoose.model("Screens", screensSchema);