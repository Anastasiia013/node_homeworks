import { Router } from "express";

import {
    getAllPublishersController,
    addPublisherController,
    updatePublisherController,
    deletePublisherController
} from "../controllers/publisher.controller.js";

const publisherRouter = Router();

publisherRouter.get("/", getAllPublishersController);
publisherRouter.post("/", addPublisherController);
publisherRouter.put("/:id", updatePublisherController);
publisherRouter.delete("/:id", deletePublisherController);

export default publisherRouter;