import { createUploader } from "../../utils/upload.js";

export const networkUpload = createUploader({
  network_logo: {
    folder: "uploads/logos",
    allowedTypes: /jpeg|jpg|png|webp/,
    errorMessage: "Only images allowed for logo",
  },
  network_contract_files: {
    folder: "uploads/contracts",
    allowedTypes: /pdf|doc|docx/,
    errorMessage: "Only documents (pdf, doc, docx) allowed for contracts",
  },
});