import mongoose from "mongoose";

const SolutionWeOfferSchema = new mongoose.Schema({
    title: { type: String, require: true },
    ServiceHomePageimage: { type: String, require: true },
    desc: { type: String, require: true },

}, { timestamps: true });

const SolutionWeOfferModel = mongoose.model('serviceData', SolutionWeOfferSchema);

export default SolutionWeOfferModel;   