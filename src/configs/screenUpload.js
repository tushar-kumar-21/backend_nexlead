import { createUploader } from "../../utils/upload.js";

export const screenUpload = createUploader({
    screen_documents: {
        folder: "uploads/screen_documents",
        allowedTypes: /pdf|doc|docx/,
        errorMessage: "Only documents (pdf, doc, docx) allowed for contracts",
    },
    screen_screens: {
        folder: "uploads/screen_screens",
        allowedTypes: /jpeg|jpg|png|webp/,
        errorMessage: "Only images allowed for screens",
    },
})