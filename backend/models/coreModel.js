import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const coresSchema = new Schema ({
    size: {
        type: Number,
        required: true,
    },
    count: {
        type: Number,
        required: true,
    },
}, { timestamps: true })

export default mongoose.model('coreModel', coresSchema);