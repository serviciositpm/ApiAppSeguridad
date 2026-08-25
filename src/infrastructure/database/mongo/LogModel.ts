import mongoose, { Schema } from "mongoose";
import { LogEntry } from "../../../domain/entities/Log";

interface LogDocument extends LogEntry, mongoose.Document {}

const LogSchema = new Schema<LogDocument>({
  level: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  meta: { type: Object },
});

export default mongoose.model<LogDocument>("Log", LogSchema, "logsSeguridad");
