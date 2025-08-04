import { apiResponse } from "../constants.js";
import { Networks } from "../models/Networks.js";

export const createNetworks = async (req, res) => {
    
    try {
        const {
            network_name,
            network_address,
            network_city,
            network_province,
            network_postal_code,
            network_date_signature,
            network_contact_first_name,
            network_contact_last_name,
            network_email,
            network_contact_phone_no,
            network_contact_telephone_no,
        } = req.body;

        const logoFile = req?.files?.network_logo[0];
        const contractFiles = req?.files?.network_contract_files || [];

        const newNetwork = await Networks.create({
            network_name,
            network_address,
            network_city,
            network_province,
            network_postal_code,
            network_date_signature: new Date(network_date_signature),
            network_contact_first_name,
            network_contact_last_name,
            network_email,
            network_contact_phone_no,
            network_contact_telephone_no,
            network_logo: logoFile ? logoFile.filename : null,
            network_contract_files: contractFiles.map(file => ({
                filename: file.filename,
                path: file.path,
                mimetype: file.mimetype,
                size: file.size,
            })),
        });

        return apiResponse(res, 201, "Network created successfully", newNetwork);
    } catch (error) {
        console.log(error);

    }
}

export const updateNetwork = async (req, res) => {
    try {

        const { id } = req.params;
        const updateData = req.body;
        const files = req.files;
        console.log(files);


        // Optional logo update
        if (files?.network_logo && files.network_logo.length > 0) {
            updateData.network_logo = files.network_logo ? files?.network_logo[0]?.filename : null
        }

        // Append new contract files if any
        if (files?.network_contract_files && files.network_contract_files.length > 0) {
            const uploadedContracts = files?.network_contract_files?.map(file => ({
                filename: file.filename,
                path: file.path,
                mimetype: file.mimetype,
                size: file.size,
            }))

            // Append to existing array
            const network = await Networks.findById(id);

            const existingContracts = network.network_contract_files || [];

            updateData.network_contract_files = [...existingContracts, ...uploadedContracts];
        }

        const updated = await Networks.findByIdAndUpdate(id, updateData, { new: true });
        return apiResponse(res, 201, "Network updated successfully", updated);

    } catch (error) {
        console.log(error)
    }
}

export const getAllNetworks = async (req, res) => {
    try {
        const networks = await Networks.find();
        return apiResponse(res, 200, 'Networks fetched successfully', networks);
    } catch (error) {
        console.log(error);

    }
}

export const getNetworkById = async (req, res) => {
    const { id } = req.params;
    try {
        const network = await Networks.findById(id);
        return apiResponse(res, 200, 'Network fetched successfully', network);
    } catch (error) {
        console.log(error);
    }
}

export const getNetworksInSingle = async (req, res) => {
    try {
        const { id } = req.params;

        if (id) {
            const network = await Networks.findById(id);
            if (!network) {
                return apiResponse(res, 404, 'Network not found');
            }
            return apiResponse(res, 200, 'Single network fetched successfully', network);
        } else {
            const networks = await Networks.find();
            return apiResponse(res, 200, 'All networks fetched successfully', networks);
        }

    } catch (error) {
        console.error(error);
        return apiResponse(res, 500, 'Error fetching network(s)');
    }
};
