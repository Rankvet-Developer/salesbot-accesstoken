import mongoose from 'mongoose';

const AccessTokenSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            default: '1',
        },
        id_token: {
            type: String,
            required: true,
        },
        access_token: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

export default mongoose.model(
    'SalesbotAccessTokenModel',
    AccessTokenSchema,
);
