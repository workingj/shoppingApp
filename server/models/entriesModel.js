import mongoose from "mongoose";

const entrySchema = new mongoose.Schema({
    item: {
        type: String,
        required: [true, 'name is required'],
        unique: true,
        trim: true,
    },

    tstamp: {
        type: Date,
        required: [true, "tstamp is required"],
        default: Date(),
    },
});

export default mongoose.model('Entry', entrySchema);