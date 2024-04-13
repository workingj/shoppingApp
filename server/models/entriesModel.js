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

    checked: {
        type: Boolean,
        required: [true, "checked is required"],
        default: false,
    }
});

export default mongoose.model('Entry', entrySchema);