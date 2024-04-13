export const errorHandler = (error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Server Error';
    console.log("errorHandler::",error.message);

    if (error.message.includes('E11000')) {
        res.status(statusCode).json({ message: "Doppelter Eintrag" });
    } else {
        res.status(statusCode).json({ message: message });
    }
    // console.log(req.method, req.url, statusCode, message);
};