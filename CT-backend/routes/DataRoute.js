import upload from "../multer.js";
import express from "express";
import { MultiImageupload } from "../middleware/multiImageMulter.js";
export const dataroute = express.Router();

// import { Admin, authlogin } from "../middlwares/userauth.js";
import { addSliderData, deleteheroslliderdata, editherosliderdata, getherosliderdata } from "../controllers/HomePage/heroSectionsController.js";
import { addPartener, deletePartenerData, editPartenerData, getPartenarData } from "../controllers/HomePage/OurPartenerController.js";
import { addSolutionData, deleteSolutionData, editSolutionWeOffer, getSolutionData } from "../controllers/HomePage/SolutionWeOfferController.js";
import { addServiceData, deleteServiceData, editServiceData, getServiceData } from "../controllers/HomePage/serviceWeOfferController.js";
import { addIndustriesData, deleteIndustriesData, editIndustriesData, getIndustriesData } from "../controllers/HomePage/industriesController.js";
import { addCaseStudiesData, deleteCaseStudiesData, editCaseStudiesData, getCaseStudiesData } from "../controllers/HomePage/CaseStudiesController.js";
import { addBlogsData, deleteBlogData, editBlogData, getBlogData } from "../controllers/HomePage/BlogController.js";
import { addClientReviewData, deleteClientReviewData, editClientReviewData, getClientReviewData } from "../controllers/HomePage/meetOurClientController.js";
import { addHomeFaq, deleteHomeFaq, getHomeFaq, updateHomeFaqById } from "../controllers/FAQ's/HomePageFaqController.js";
import { addbookFreeConData, deletebookFreeConData, editbookFreeConData, getbookFreeConData } from "../controllers/HomePage/bookFreeConController.js";

//heroslider routes
dataroute.post('/add-heroslider-data', upload.single('herosliderImage'), addSliderData)
dataroute.get('/get-heroslider-data', getherosliderdata)
dataroute.put('/edit-heroslider-data/:id', upload.single('herosliderImage'), editherosliderdata)
dataroute.delete('/delete-heroslider-data/:id', deleteheroslliderdata)

//our partener route
dataroute.post('/add-partener-data', upload.single('logo'), addPartener)
dataroute.get('/get-partener-data', getPartenarData)
dataroute.put('/edit-partener-data/:id', upload.single('logo'), editPartenerData)
dataroute.delete('/delete-partener-data/:id', deletePartenerData)

//service data routes 
dataroute.get("/get-service-data", getServiceData);
dataroute.post("/add-service-data", MultiImageupload.array("images", 2), addServiceData);
dataroute.put("/edit-service-data/:id", MultiImageupload.array("images", 2), editServiceData);
dataroute.delete("/delete-service-data/:id", deleteServiceData);

//solution we offer routes

dataroute.post('/add-solution-we-offer-data', MultiImageupload.array('images', 1), addSolutionData)
dataroute.get('/get-solution-we-offer-data', getSolutionData)
dataroute.put('/edit-solution-we-offer-data/:id', MultiImageupload.array('images', 1), editSolutionWeOffer)
dataroute.delete('/delete-solution-we-offer-data/:id', deleteSolutionData)

//industries we offer routes
dataroute.post('/add-industries-data', MultiImageupload.array('images', 1), addIndustriesData)
dataroute.get('/get-industries-data', getIndustriesData)
dataroute.put('/edit-industries-data/:id', MultiImageupload.array('images', 1), editIndustriesData)
dataroute.delete('/delete-industries-data/:id', deleteIndustriesData)

//case Studies Routes
dataroute.post("/add-case-studies-data", MultiImageupload.array('images', 1), addCaseStudiesData)
dataroute.get("/get-case-studies-data", getCaseStudiesData)
dataroute.put("/edit-case-studies-data/:id", MultiImageupload.array('images', 1), editCaseStudiesData)
dataroute.delete("/delete-case-studies-data/:id", deleteCaseStudiesData)

//blog data Routes
dataroute.post("/add-blog-data", MultiImageupload.array('images', 1), addBlogsData)
dataroute.get("/get-blog-data", getBlogData)
dataroute.put("/edit-blog-data/:id", MultiImageupload.array('images', 1), editBlogData)
dataroute.delete("/delete-blog-data/:id", deleteBlogData)

//meet our client data routes
dataroute.post("/add-client-review-data", MultiImageupload.array('images', 1), addClientReviewData)
dataroute.get("/get-client-review-data", getClientReviewData)
dataroute.put("/edit-client-review-data/:id", MultiImageupload.array('images', 1), editClientReviewData)
dataroute.delete("/delete-client-review-data/:id", deleteClientReviewData)

//home faq routes
dataroute.post("/add-home-faq", MultiImageupload.array('images', 1), addHomeFaq)
dataroute.get("/get-home-faq", getHomeFaq)
dataroute.put("/edit-home-faq/:id", MultiImageupload.array('images', 1), updateHomeFaqById)
dataroute.delete("/delete-home-faq/:id", deleteHomeFaq)

//book free consultation routes
dataroute.post("/add-book-free-con-data", addbookFreeConData)
dataroute.get("/get-book-free-con-data", getbookFreeConData)
dataroute.put("/edit-book-free-con-data/:id", editbookFreeConData)
dataroute.delete("/delete-book-free-con-data/:id", deletebookFreeConData)


