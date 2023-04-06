import mongoose from 'mongoose';
import SalesbotAccessToken from './accesstoken.schema';

export class DatabaseService {
    async connect() {
        try {
            await mongoose.connect(process.env.MONGO_URI as string);
            console.log('database is connected...');
        } catch (err: any) {
            console.log(err.message);
        }
    }

    async findAndUpdate(updatedData: any) {
        try {
            await SalesbotAccessToken.findOneAndUpdate(
                {
                    id: '1',
                },
                updatedData,
                { upsert: true },
            );
            console.log('successfully updated data in database...');
        } catch (err: any) {
            console.log(err.message);
        }
    }
}
