import { connect } from 'mongoose';

const host = process.env.DATABASE_HOST || 'localhost';
const db = process.env.DATABASE_NAME || 'sentechnicien';
const user = process.env.DATABASE_USER || 'sentechnicien';
const password = process.env.DATABASE_PASSWORD || 'password';

export const connectMongo = async () => {
    try {
        await connect(`mongodb+srv://${user}:${password}@${host}/${db}?retryWrites=true&w=majority`);
        console.log("Connection successful");
    } catch (err) {
        console.log('This is the error: ', err);
    }
}