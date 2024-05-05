import ClientReviewModel from "../../Models/HomePage/meetOurClientModel.js";
import cloudinary from "../../cloudinary.js";


export const addClientReviewData = async (req, res) => {
    try {
        const { title, desc, coreTech } = req.body;
        const images = [];
        const uploadedFiles = req.files;
        for (const file of uploadedFiles) {
            const result = await cloudinary.v2.uploader.upload(file.path);
            images.push(result.secure_url);
            fs.unlinkSync(file.path);
        }
        const newData = new ClientReviewModel({
            title, desc, homePageCaseStudiesImage: images[0] || "", coreTech
        })
        const saveData = await newData.save();
        res.status(200).send({
            status: "Success",
            saveData
        })

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const getClientReviewData = async (req, res) => {
    try {
        const getData = await ClientReviewModel.find({}).sort({ createdAt: -1 })
        res.status(200).send({
            message: "All data get Successfully", getData
        })

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const editClientReviewData = async (req, res) => {
    try {
        const { id } = req.params
        const {name, review, jobProfile } = req.body;
        const images = [];
        const uploadedFiles = req.files;
        for (const file of uploadedFiles) {
            const result = await cloudinary.v2.uploader.upload(file.path)
            images.push(result.secure_url)
            fs.unlinkSync(file.path);
        }

        const clientById = await ClientReviewModel.findById(id);
        if (!caseStudyById) {
            return res.status(404).json({
                error: 'solution not found'
            })
        }
        clientById.name = name || clientById.title
        clientById.review = review || clientById.review
        clientById.profileImage = images[0] || clientById.profileImage
        clientById.jobProfile = coreTech || clientById.jobProfile
        

        res.status(200).send({
            message: "Data updated Successfully",
            clientById
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const deleteClientReviewData = async (req, res) => {
    try {
        const { id } = req.params;
        await ClientReviewModel.findByIdAndDelete({ _id: id })

        res.status(200).send({
            message: "Data deleted successfully"
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}