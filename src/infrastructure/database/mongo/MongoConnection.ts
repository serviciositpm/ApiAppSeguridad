import mongoose from "mongoose";
import { MONGO_URI } from "../../config/env";

export async function connectMongoDB(): Promise<void> {
  try {
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("🟢 Conectado a MongoDB");
  } catch (error) {
    console.error("🔴 Error conectando a MongoDB:", error);
    process.exit(1);
  }
}
