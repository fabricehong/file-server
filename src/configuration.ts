import { load } from 'dotenv-extended';
import { join } from "path";


const DEFAULT_STORAGE_SUBFOLDER = 'uploads';

load({
    path: '.env',
    defaults: '.env.defaults',
    schema: '.env.schema',
});

function getStorageRoot(): string {
    const uploadFolder = process.env.STORAGE_ROOT;
    if (uploadFolder) {
        return uploadFolder;
    }

    return join(__dirname, '..', DEFAULT_STORAGE_SUBFOLDER);
}

function getMaxFileSize(): number {
    return Number(process.env.MAX_FILE_SIZE);
}

function getServerPort(): number {
    return Number(process.env.SERVER_PORT);
}

function getJwtSecret(): string {
    return process.env.JWT_SECRET;
}

function getFilesExpirationMinutes(): number {
    return Number(process.env.FILES_EXPIRATION_MINUTES);
}

export const configuration = {
    getStorageRoot,
    getMaxFileSize,
    getServerPort,
    getJwtSecret,
    getFilesExpirationMinutes
};
