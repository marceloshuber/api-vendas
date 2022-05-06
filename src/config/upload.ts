import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads');

export default {
    directory: uploadFolder,
    storage: multer.diskStorage({
        destination: uploadFolder,
        filename(request, file, callbak) {
            const fileHash = crypto.randomBytes(10).toString('hex');

            const filename = '${fileHash}-${file.oridinalname}';

            callbak(null, filename);
        },
    }),
};
