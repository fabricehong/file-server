import { load } from 'dotenv-extended';

load({
    path: '.env',
    defaults: '.env.defaults',
    schema: '.env.schema',
});

function getStorageRoot(): string {
    return process.env.STORAGE_ROOT;
}

function getMaxFileSize(): number {
    return Number(process.env.MAX_FILE_SIZE);
}

export const configuration = {
    getStorageRoot,
    getMaxFileSize
};
