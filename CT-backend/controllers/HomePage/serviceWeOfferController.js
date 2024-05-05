import cloudinary from '../../cloudinary.js';
import ServiceModel from '../../Models/HomePage/ServiceWeOfferModel.js';

//Add Service Data

export const addServiceData = async (req, res) => {
    try {
        const { title, desc } = req.body
        const images = [];
        const uploadedFiles = req.files
        for (const file of uploadedFiles) {
            const result = await cloudinary.v2.uploader.upload(file.path);
            images.push(result.secure_url);
            fs.unlinkSync(file.path);
        }
        const newData = new ServiceModel({
            title, ServiceHomePageimage: images[0] || "", desc
        })
        const saveData = await newData.save();
        res.status(200).send({
            status: "Success",
            saveData
        });

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const getServiceData = async (req, res) => {
    try {
        const getData = await ServiceModel.find({}).sort({ createdAt: -1 })
        res.status(200).send({
            message: "All data get Successfully", getData
        })

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const editServiceData = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, desc } = req.body
        const images = [];
        const uploadedFiles = req.files;
        for (const file of uploadedFiles) {
            const result = await cloudinary.v2.uploader.upload(file.path);
            images.push(result.secure_url);
            fs.unlinkSync(file.path);
        }
        const serviceDataById = await ServiceModel.findById(id);
        if (!serviceDataById) {
            return res.status(404).json({ error: 'services not found' });
        }
        serviceDataById.title = title || serviceDataById.title
        serviceDataById.desc = desc || serviceDataById.desc
        serviceDataById.ServiceHomePageimage = images[0] || serviceDataById.ServiceHomePageimage
        await serviceDataById.save();
        res.status(200).send({
            message: "Data updated Succesfully",
            serviceDataById
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const deleteServiceData = async (req, res) => {
    try {
        const { id } = req.params;
        await ServiceModel.findByIdAndDelete({ _id: id })

        res.status(200).send({
            message: "Data deleted successfully"
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}