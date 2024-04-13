import Entry from "../models/entriesModel.js";

export const addEntry = async (req, res, next) => {
    const { item } = req.body;
    const tstamp = Date.now();

    try {
        const entry = new Entry({ item, tstamp });
        const added = await entry.save();
        console.log(`Controller::addEntry: ${entry}`);
        res.status(201).json(added);
    } catch (err) {
        console.error("Controller::addEntry:", err.message);
        next(err)
    }
}

export const getEntries = async (req, res, next) => {
    try {
        const entries = await Entry.find();
        if (!entries) {
            throw { statusCode: 404, message: 'Entrys not found !' };
        }
        console.log(`Controller::getEntries: ${"entries"}`);
        res.json(entries);
    } catch (err) {
        console.error('Controller::getEntries:', err.message);
        next(err)
    }
}

export const getEntryById = async (req, res, next) => {
    const id = req.params;

    try {
        const entry = await Entry.findById(id);
        if (!entry) {
            throw { statusCode: 404, message: `Entry '${id}' not found !` };
        }
        console.log('Controller::getEntryById:', entry);
        res.json(entry);
    } catch (err) {
        console.error('Controller::getEntryById:', err.message);
        next(err)
    }
}

export const updateEntry = async (req, res, next) => {
    const { item, checked } = req.body;
    const { id } = req.params;
    const tstamp = Date.now();

    try {
        const updateEntry = await Entry.findByIdAndUpdate(
            id, { item, tstamp, checked }, { new: true }
        );
        if (!updateEntry) {
            throw { statusCode: 404, message: `Entry: "${id} ${item} "${tstamp} not found !` }
        }
        console.error("Controller::updateEntry:", updateEntry);
        res.json(updateEntry);
    } catch (err) {
        console.error("Controller::updateEntry:", err.message);
        next(err)
    }
}

export const deleteEntry = async (req, res, next) => {
    const { id } = req.params;

    try {
        const deleteEntry = await Entry.findByIdAndDelete(id);
        if (!deleteEntry) {
            throw { statusCode: 404, message: `Entry: "${id}" not found !` }
        }
        console.log("Controller::deleteEntry:", deleteEntry);
        res.json(deleteEntry);
    } catch (err) {
        console.error("Controller::deleteEntry:", err.message);
        next(err)
    }
}