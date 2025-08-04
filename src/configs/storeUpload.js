// configs/storeUpload.js
import { createUploader } from "../../utils/upload.js";
export const storeUpload = createUploader({
  store_logo: {
    folder: "uploads/store_logos",
    allowedTypes: /jpeg|jpg|png|webp/,
    errorMessage: "Only images allowed for store logo",
  },
  store_exterior_photo:{
    folder: "uploads/store_exterior_photos",
    allowedTypes: /jpeg|jpg|png|webp/,
    errorMessage: "Only images allowed for store exterior photo"
  },
  store_screens: {
    folder: "uploads/store_screens",
    allowedTypes: /pdf|doc|docx/,
    errorMessage: "Only documents allowed for store screens",
  },
});
