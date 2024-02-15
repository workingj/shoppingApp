import { Router } from "express";
import * as entriesController from '../controller/entriesController.js'

const entryRouter = Router();

entryRouter
    .route('/entries')
    .get(entriesController.getEntries)
    .post(entriesController.addEntry);
    
    entryRouter
    .route('/entries/:id')
    .get(entriesController.getEntryById)
    .put(entriesController.updateEntry)
    .delete(entriesController.deleteEntry);

export default entryRouter;