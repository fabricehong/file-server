import { load } from 'dotenv-extended';
import { join } from "path";

load({
    path: '.env',
    defaults: '.env.defaults',
    schema: '.env.schema',
});

function getStorageRoot(): string {
    const uploadFolder = process.env.STORAGE_ROOT;
    return join(__dirname, '..', uploadFolder);
}

function getMaxFileSize(): number {
    return Number(process.env.MAX_FILE_SIZE);
}

export const configuration = {
    getStorageRoot,
    getMaxFileSize
};
