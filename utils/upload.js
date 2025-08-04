
import multer from "multer";
import path from "path";
import fs from "fs";

// Utility to create folder if not exists
const createDir = (folder) => {
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
    }
};

// Factory function to build storage dynamically
const createStorage = (fieldConfig) =>
    multer.diskStorage({
        destination: (req, file, cb) => {
            let folder = fieldConfig[file.fieldname]?.folder || "uploads/misc";
            createDir(folder);
            cb(null, folder);
        },
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const unique = `${file.fieldname}-${Date.now()}-${Math.round(
                Math.random() * 1e9
            )}${ext}`;
            cb(null, unique);
        },
    });

// Main function
export const createUploader = (fieldConfig) =>
    multer({
        storage: createStorage(fieldConfig),
        limits: { fileSize: 5 * 1024 * 1024 },
        fileFilter: (req, file, cb) => {  
            console.log(fieldConfig,'dsdd');
            
            console.log(file);
            const config = fieldConfig[file.fieldname];
            if (!config) return cb(new Error("Invalid field name"));
            if (config.allowedTypes.test(file.mimetype)) {
                cb(null, true);
            } else {
                cb(new Error(config.errorMessage));
            }
        },
    });
