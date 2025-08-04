import { apiResponse } from "../constants.js";
import { Advertiser } from "../models/Advertiser.js";

export const createAdvertisers = async (req, res) => {
    console.log(req.files, 'saads');
    
    try {
        const {
            advertiser_email,
            advertiser_phone_no,
            advertiser_name,
            advertiser_business_name,
            advertiser_business_sub_name,
            advertiser_address,
            advertiser_city,
            advertiser_province,
            advertiser_postal_code,
            advertiser_business_description,
            advertiser_services,
        } = req.body;

        const logoFile = req?.files?.advertiser_logo[0];
        // const layoutImg = req?.files?.advertiser_layout_img[0];
        // const businessFrontImage = req?.files?.advertiser_business_front_img[0];
        // const businessBackImage = req?.files?.advertiser_business_back_img[0];
        // const flipImage = req?.files?.advertiser_flip_image[0];
        // const backgroundImage = req?.files?.advertiser_background_image[0];
        // const exclusiveImage = req?.files?.advertiser_exclusive_image[0];

        const newAdvertiser = await Advertiser.create({
            advertiser_email,
            advertiser_phone_no,
            advertiser_name,
            advertiser_business_name,
            advertiser_business_sub_name,
            advertiser_address,
            advertiser_city,
            advertiser_province,
            advertiser_postal_code,
            advertiser_business_description,
            advertiser_services,
            advertiser_logo:logoFile ? logoFile.filename : null,
            advertiser_layout_img:layoutImg ? layoutImg.filename : null,
            advertiser_business_front_img:businessFrontImage ? businessFrontImage.filename : null,
            advertiser_business_back_img:businessBackImage ? businessBackImage.filename : null,
            advertiser_flip_image:flipImage ? flipImage.filename : null,
            advertiser_background_image:backgroundImage ? backgroundImage.filename : null,
            advertiser_exclusive_image:exclusiveImage ? exclusiveImage.filename : null
        })

        return apiResponse(res, 201, "Advertiser created successfully", newAdvertiser);

    } catch (error) {
        console.log(error)
    }
}