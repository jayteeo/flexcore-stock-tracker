import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const coresSchema = new Schema ({
    size: {
        type: Schema.Types.Mixed,
        required: true,
    },
    count: {
        type: Number,
        required: true,
    },
}, { timestamps: true })

export default mongoose.model('coreModel', coresSchema);