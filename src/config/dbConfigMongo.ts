import mongoose from 'mongoose';
import { MONGO_URI } from '../environments/env';

const connectMongoDB = async () => {
    try {
        await mongoose.connect(MONGO_URI as string, {
            serverSelectionTimeoutMS: 5000, // Tiempo de espera para selección de servidor
        });
        console.log('🟢 Conectado a MongoDB');
    } catch (error) {
        console.error('🔴 Error conectando a MongoDB:', error);
        process.exit(1); // Salir del proceso en caso de error
    }
};

export default connectMongoDB;
