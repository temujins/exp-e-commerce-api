import * as mongoose from 'mongoose';
import { IShop } from 'globals';

export type ShopDocument = IShop & mongoose.Document;

const shopSchema = new mongoose.Schema<IShop>(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },

        owner: {
            type: String,
            required: true,
        },

        desc: {
            type: String,
        },

        categories: Array,

        items: Array,

        ownerId: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

const shopModel = mongoose.model<ShopDocument>('shop', shopSchema);

export default shopModel;
