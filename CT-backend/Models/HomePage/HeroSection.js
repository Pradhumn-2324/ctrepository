import mongoose from "mongoose";

const heroSectionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    herosliderImage: { type: String, required: true },
    desc: { type: String, required: true }
}, { timestamps: true });

const HeroSection = mongoose.model('HeroSection', heroSectionSchema);

export default HeroSection;   