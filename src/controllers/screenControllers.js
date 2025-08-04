import { apiResponse } from "../constants.js";
import { Screens } from "../models/Screens.js";

export const createScreens = async (req, res) => {
    try {
        const {
            network_id,
            store_id,
            broadcast_link,
            installation_date,
            warranty_date,
            screen_note,
            screen_maintenance,
            serial_number
        } = req.body;

        const screenDocuments = req?.files?.screen_documents;
        const screenScreens = req?.files?.screen_screens;

        const newScreen = await Screens.create({
            network_id,
            store_id,
            broadcast_link,
            installation_date,
            warranty_date,
            screen_note,
            screen_maintenance,
            serial_number,
            screen_documents: screenDocuments?.map(file => ({
                filename: file.filename,
                path: file.path,
                mimetype: file.mimetype,
                size: file.size,
            })),
            screen_screens: screenScreens?.map(file => ({
                filename: file.filename,
                path: file.path,
                mimetype: file.mimetype,
                size: file.size,
            }))
        })

        return apiResponse(res, 201, "Screen created successfully", newScreen)

    } catch (error) {
        console.log(error);
    }
}