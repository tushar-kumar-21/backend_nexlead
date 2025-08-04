import { apiError, apiResponse } from "../constants.js";
import { Networks } from "../models/Networks.js";
import { Stores } from "../models/Stores.js";

export const createStores = async (req, res) => {

    try {
        const {
            store_name,
            store_address,
            store_network,
            store_city,
            store_province,
            store_postal_code,
            store_type,
            store_region,
            store_owner_email,
            store_owner_name,
            store_owner_phone_no,
            network_id,
            store_manager_email,
            store_manager_phone_no,
            store_manager_name,
        } = req?.body;

        const logoFile = req?.files?.store_logo[0];
        const exteriorFiles = req?.files?.store_exterior_photo[0];
        const screenFiles = req?.files?.store_screens || [];

        const existingNetwork = await Networks.findById(network_id);
        if (!existingNetwork) {
            return apiError(res, 404, "Network not found")
        }

        const newStore = await Stores.create({
            store_name,
            store_address,
            store_network,
            store_city,
            store_province,
            store_postal_code,
            store_type,
            store_region,
            store_owner_email,
            store_owner_name,
            store_owner_phone_no,
            network_id,
            store_manager_email,
            store_manager_phone_no,
            store_manager_name,
            store_logo: logoFile?.filename || null,
            store_exterior_photo: exteriorFiles?.filename || null,
            store_screens: screenFiles?.map((file) => ({
                filename: file?.filename,
                path: file.path,
                mimetype: file.mimetype,
                size: file.size,
            })),

        })

        return apiResponse(res, 201, 'Store created successfully', newStore);

    } catch (error) {
        console.log(error)
    }
}